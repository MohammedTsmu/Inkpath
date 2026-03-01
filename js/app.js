/* ============================================================
   Inkpath — Main Application Controller
   ============================================================ */

(function () {
    'use strict';

    // ─── DOM References ─────────────────────────────────────────
    const templateSelect = document.getElementById('template-select');
    const paperSizeSelect = document.getElementById('paper-size');
    const startDateInput = document.getElementById('start-date');
    const themeSelect = document.getElementById('theme-select');
    const btnGenerate = document.getElementById('btn-generate');
    const btnPrint = document.getElementById('btn-print');
    const btnPdf = document.getElementById('btn-pdf');
    const btnWord = document.getElementById('btn-word');
    const templateContainer = document.getElementById('template-container');

    // ─── Template Registry ──────────────────────────────────────
    const templates = Object.assign({},
        DailyTemplates,
        WeeklyTemplates,
        MonthlyTemplates,
        AntiProcrastinationTemplates,
        YearlyTemplates,
        FinanceTemplates,
        HealthTemplates,
        ProductivityTemplates,
        PersonalTemplates
    );

    // ─── Initialize ─────────────────────────────────────────────
    function init() {
        // Set version and copyright year from config
        updateVersionDisplay();

        // Set default date to today
        const today = new Date();
        startDateInput.value = formatInputDate(today);

        // Load saved preferences
        loadPreferences();

        // Event listeners
        btnGenerate.addEventListener('click', generate);
        btnPrint.addEventListener('click', printTemplate);
        btnPdf.addEventListener('click', exportPdf);
        btnWord.addEventListener('click', exportWord);
        paperSizeSelect.addEventListener('change', onPaperSizeChange);
        templateSelect.addEventListener('change', savePreferences);
        themeSelect.addEventListener('change', savePreferences);

        // Keyboard shortcut: Ctrl+P to print
        document.addEventListener('keydown', function (e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
                e.preventDefault();
                printTemplate();
            }
        });

        // Electron menu "Export as PDF" trigger
        if (window.electronAPI && window.electronAPI.onTriggerPdfExport) {
            window.electronAPI.onTriggerPdfExport(function () {
                exportPdf();
            });
        }

        // Auto-generate on load if there's a saved template
        const savedTemplate = localStorage.getItem('lp-template');
        if (savedTemplate && templates[savedTemplate]) {
            templateSelect.value = savedTemplate;
            generate();
        }
    }

    // ─── Generate Template ──────────────────────────────────────
    function generate() {
        const templateId = templateSelect.value;
        const paperSize = paperSizeSelect.value;
        const date = startDateInput.value ? new Date(startDateInput.value + 'T00:00:00') : new Date();
        const theme = themeSelect.value;

        const templateFn = templates[templateId];
        if (!templateFn) {
            console.error('Template not found:', templateId);
            return;
        }

        // Generate HTML
        const html = templateFn(date, paperSize);

        // Apply to container
        templateContainer.innerHTML = html;

        // Apply paper size class
        templateContainer.className = 'template-container';
        if (paperSize === 'a5') {
            templateContainer.classList.add('a5');
        }

        // Apply theme class
        const page = templateContainer.querySelector('.template-page');
        if (page) {
            page.classList.remove('tpl-lined', 'tpl-dotgrid');
            if (theme === 'lined') page.classList.add('tpl-lined');
            if (theme === 'dotgrid') page.classList.add('tpl-dotgrid');
        }

        // Save preferences
        savePreferences();

        // Enable export buttons
        btnPdf.disabled = false;
        btnWord.disabled = false;

        // Scroll to template
        templateContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // ─── Print ──────────────────────────────────────────────────
    function printTemplate() {
        const paperSize = paperSizeSelect.value;

        // Add paper size class to body for print CSS
        document.body.classList.remove('paper-a4', 'paper-a5');
        document.body.classList.add(`paper-${paperSize}`);

        // Trigger print
        window.print();
    }

    // ─── Export PDF ─────────────────────────────────────────────
    function exportPdf() {
        const page = templateContainer.querySelector('.template-page');
        if (!page) return;

        const paperSize = paperSizeSelect.value;
        const templateId = templateSelect.value;
        const isA5 = paperSize === 'a5';

        // Determine dimensions in mm
        const w = isA5 ? 148 : 210;
        const h = isA5 ? 210 : 297;

        // Show loading state
        const originalText = btnPdf.textContent;
        btnPdf.textContent = '⏳ Exporting...';
        btnPdf.disabled = true;

        // Check if running in Electron
        const isElectron = typeof process !== 'undefined' && process.versions && process.versions.electron;

        if (isElectron) {
            // Use Electron's native printToPDF for better quality
            electronExportPdf(templateId, paperSize, w, h, originalText);
        } else {
            // Use html2pdf.js for browser export
            browserExportPdf(page, templateId, w, h, originalText);
        }
    }

    function browserExportPdf(element, templateId, w, h, originalBtnText) {
        const filename = `inkpath-${templateId}-${formatFileDate(new Date())}.pdf`;

        // ---- Create an off-screen clone sized exactly to paper dimensions ----
        // 1 mm ≈ 3.78 px at 96 DPI.  We render at a clean pixel width.
        var pxPerMm = 3.7795275591;
        var paperWidthPx  = Math.round(w * pxPerMm);
        var paperHeightPx = Math.round(h * pxPerMm);

        // Wrapper that forces the exact paper width
        var wrapper = document.createElement('div');
        wrapper.style.cssText =
            'position:fixed;left:-10000px;top:0;' +
            'width:' + paperWidthPx + 'px;' +
            'min-height:' + paperHeightPx + 'px;' +
            'background:#fff;overflow:visible;z-index:-1;';

        // Deep-clone the template page
        var clone = element.cloneNode(true);
        clone.style.width  = '100%';
        clone.style.margin = '0';
        clone.style.boxShadow  = 'none';
        clone.style.border = 'none';
        clone.style.borderRadius = '0';
        clone.style.minHeight = paperHeightPx + 'px';
        // Ensure print-color-adjust on clone
        clone.style.webkitPrintColorAdjust = 'exact';
        clone.style.colorAdjust = 'exact';

        wrapper.appendChild(clone);
        document.body.appendChild(wrapper);

        // Small delay to let the browser reflow the clone
        setTimeout(function () {
            var captureHeight = Math.max(paperHeightPx, clone.scrollHeight);

            var opt = {
                margin:       [0, 0, 0, 0],
                filename:     filename,
                image:        { type: 'png', quality: 1 },
                html2canvas:  {
                    scale: 2,
                    useCORS: true,
                    letterRendering: true,
                    backgroundColor: '#ffffff',
                    logging: false,
                    width:  paperWidthPx,
                    height: captureHeight,
                    windowWidth:  paperWidthPx,
                    windowHeight: captureHeight,
                    x: 0,
                    y: 0,
                    scrollX: 0,
                    scrollY: 0
                },
                jsPDF: { unit: 'mm', format: [w, h], orientation: 'portrait' },
                pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
            };

            html2pdf().set(opt).from(clone).save()
                .then(function () {
                    document.body.removeChild(wrapper);
                    btnPdf.textContent = '✅ Saved!';
                    setTimeout(function () {
                        btnPdf.textContent = originalBtnText;
                        btnPdf.disabled = false;
                    }, 2000);
                })
                .catch(function (err) {
                    console.error('PDF export failed:', err);
                    document.body.removeChild(wrapper);
                    btnPdf.textContent = '❌ Failed';
                    setTimeout(function () {
                        btnPdf.textContent = originalBtnText;
                        btnPdf.disabled = false;
                    }, 2000);
                });
        }, 200);
    }

    function electronExportPdf(templateId, paperSize, w, h, originalBtnText) {
        // Electron IPC for native PDF — dispatches a custom event
        // that main.js listens for via webContents
        const filename = `inkpath-${templateId}-${formatFileDate(new Date())}.pdf`;

        // Use Electron's printToPDF via the window.electronAPI if exposed,
        // otherwise fall back to html2pdf.js
        if (window.electronAPI && window.electronAPI.exportPdf) {
            window.electronAPI.exportPdf({
                filename: filename,
                landscape: false,
                pageSize: paperSize === 'a5' ? { width: 148000, height: 210000 } : 'A4',
                printBackground: true
            }).then(function () {
                btnPdf.textContent = '✅ Saved!';
                setTimeout(function () {
                    btnPdf.textContent = originalBtnText;
                    btnPdf.disabled = false;
                }, 2000);
            }).catch(function () {
                // Fallback to html2pdf.js
                const page = templateContainer.querySelector('.template-page');
                if (page) browserExportPdf(page, templateId, w, h, originalBtnText);
            });
        } else {
            // No IPC bridge — fall back to html2pdf.js
            const page = templateContainer.querySelector('.template-page');
            if (page) browserExportPdf(page, templateId, w, h, originalBtnText);
        }
    }

    // ─── Export Word ────────────────────────────────────────────
    function exportWord() {
        const page = templateContainer.querySelector('.template-page');
        if (!page) return;

        const templateId = templateSelect.value;
        const paperSize = paperSizeSelect.value;
        const isA5 = paperSize === 'a5';
        const filename = `inkpath-${templateId}-${formatFileDate(new Date())}.doc`;

        // Show loading state
        const originalText = btnWord.textContent;
        btnWord.textContent = '⏳ Exporting...';
        btnWord.disabled = true;

        // Gather CSS from all stylesheets
        var css = '';
        try {
            var sheets = document.styleSheets;
            for (var i = 0; i < sheets.length; i++) {
                try {
                    var rules = sheets[i].cssRules || sheets[i].rules;
                    if (rules) {
                        for (var j = 0; j < rules.length; j++) {
                            css += rules[j].cssText + '\n';
                        }
                    }
                } catch (e) {
                    // Cross-origin stylesheet, skip
                }
            }
        } catch (e) {
            // Fallback: no CSS
        }

        // Page dimensions in twips (1mm = 56.6929 twips)
        var pageW = isA5 ? '148mm' : '210mm';
        var pageH = isA5 ? '210mm' : '297mm';
        var pgW = isA5 ? 8391 : 11906;   // twips
        var pgH = isA5 ? 11906 : 16838;  // twips
        var pgMargin = 454;               // 8mm in twips

        // Pre-process: clone the HTML and inject content into empty elements
        // so Word doesn't collapse them. Word ignores CSS height/min-height
        // on empty elements — the only reliable fix is actual content.
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = page.outerHTML;

        // 1. Fill empty <td> cells with a non-breaking space + explicit style
        var allCells = tempDiv.querySelectorAll('td');
        for (var c = 0; c < allCells.length; c++) {
            var cell = allCells[c];
            // Add inline mso-height to every cell
            var existingStyle = cell.getAttribute('style') || '';
            cell.setAttribute('style', existingStyle + ';mso-height-rule:exactly;height:24pt;padding:4pt 5pt;');
            // If cell is empty, add a spacer
            if (!cell.textContent.trim() && !cell.querySelector('div, span, input, img')) {
                cell.innerHTML = '<span style="font-size:12pt;color:transparent;">.</span>';
            }
        }

        // 2. Fill empty .tpl-line divs with spacer content
        var allLines = tempDiv.querySelectorAll('.tpl-line, .tpl-check-line');
        for (var l = 0; l < allLines.length; l++) {
            var line = allLines[l];
            var existingS = line.getAttribute('style') || '';
            line.setAttribute('style', existingS + ';mso-height-rule:exactly;height:22pt;');
            if (!line.textContent.trim()) {
                line.innerHTML = '<span style="font-size:14pt;color:transparent;">.</span>';
            }
        }

        // 3. Force height on timeblock slots
        var allSlots = tempDiv.querySelectorAll('.tpl-timeblock-slot');
        for (var s = 0; s < allSlots.length; s++) {
            var slot = allSlots[s];
            var slotStyle = slot.getAttribute('style') || '';
            slot.setAttribute('style', slotStyle + ';mso-height-rule:exactly;height:22pt;');
            if (!slot.textContent.trim()) {
                slot.innerHTML = '<span style="font-size:14pt;color:transparent;">.</span>';
            }
        }

        // 4. Force height on checklist items
        var allCheckItems = tempDiv.querySelectorAll('.tpl-checklist li');
        for (var ci = 0; ci < allCheckItems.length; ci++) {
            var item = allCheckItems[ci];
            var itemStyle = item.getAttribute('style') || '';
            item.setAttribute('style', itemStyle + ';mso-height-rule:exactly;height:22pt;line-height:22pt;');
        }

        // 5. Force height on matrix cells
        var allMatrixCells = tempDiv.querySelectorAll('.tpl-matrix-cell');
        for (var mc = 0; mc < allMatrixCells.length; mc++) {
            var matCell = allMatrixCells[mc];
            var mcStyle = matCell.getAttribute('style') || '';
            matCell.setAttribute('style', mcStyle + ';mso-height-rule:at-least;height:60pt;');
        }

        var processedHTML = tempDiv.innerHTML;

        // Word-specific CSS overrides for proper rendering
        var wordCSS = [
            // Force table cells to have visible height via mso-height-rule
            '.tpl-table td, .tpl-habit-grid td { mso-height-rule: exactly; height: 24pt; vertical-align: top; padding: 4pt 5pt; }',
            '.tpl-table th, .tpl-habit-grid th { mso-height-rule: exactly; height: 20pt; }',
            '.tpl-calendar td { mso-height-rule: exactly; height: 32pt; }',
            // Writing lines: fixed height with mso enforcement
            '.tpl-line { mso-height-rule: exactly; height: 22pt; border-bottom: 1pt solid #c0c0c0 !important; margin-bottom: 2pt; }',
            '.tpl-check-line { mso-height-rule: exactly; height: 20pt; border-bottom: 1pt solid #c0c0c0 !important; }',
            // Lines group spacing
            '.tpl-lines-group .tpl-line { margin-bottom: 0; }',
            // Boxes and sections
            '.tpl-box { padding: 6pt; margin-bottom: 4pt; border: 1px solid #ddd; }',
            '.tpl-highlight-box { padding: 6pt; margin-bottom: 4pt; background: #f5ecd7; border: 1px solid #e8dbb8; }',
            // Grid layouts - Word doesn\'t support CSS grid, use table-like display
            '.tpl-2col { display: table; width: 100%; table-layout: fixed; }',
            '.tpl-2col > div, .tpl-2col > .tpl-section, .tpl-2col > .tpl-box, .tpl-2col > .tpl-lines-group, .tpl-2col > ul { display: table-cell; width: 50%; vertical-align: top; padding-right: 8pt; }',
            '.tpl-3col { display: table; width: 100%; table-layout: fixed; }',
            '.tpl-3col > div, .tpl-3col > .tpl-box { display: table-cell; width: 33.3%; vertical-align: top; padding-right: 6pt; }',
            '.tpl-sidebar-layout { display: table; width: 100%; table-layout: fixed; }',
            '.tpl-sidebar-layout > div { display: table-cell; vertical-align: top; padding-right: 8pt; }',
            '.tpl-sidebar-layout > div:first-child { width: 60%; }',
            '.tpl-sidebar-layout > div:last-child { width: 40%; }',
            // Flexbox fallbacks for Word
            '.tpl-line-labeled { display: table; width: 100%; }',
            '.tpl-line-labeled .label { display: table-cell; white-space: nowrap; padding-right: 4pt; }',
            '.tpl-line-labeled .line { display: table-cell; width: 100%; border-bottom: 1px solid #e0ddd8; }',
            // Rating dots
            '.tpl-rating { display: inline; }',
            '.tpl-rating-dot { display: inline-block; width: 10px; height: 10px; border: 1px solid #aaa; border-radius: 50%; margin-right: 2px; }',
            // Progress bar
            '.tpl-progress-bar { display: inline; }',
            '.tpl-progress-segment { display: inline-block; width: 8%; height: 8px; border: 1px solid #ccc; margin-right: 1px; }',
            // Checkbox
            '.tpl-checkbox { display: inline-block; width: 12px; height: 12px; border: 1px solid #aaa; margin-right: 4pt; }',
            // Timeblock
            '.tpl-timeblock { display: table; width: 100%; border-left: 2px solid #ddd; }',
            '.tpl-timeblock-row { display: table-row; }',
            '.tpl-timeblock-time { display: table-cell; width: 50px; padding: 3pt 4pt; text-align: right; font-size: 9pt; border-bottom: 1px solid #f0ede8; }',
            '.tpl-timeblock-slot { display: table-cell; border-bottom: 1px solid #e8e5e0; padding: 3pt 4pt; height: 2em; }',
            // Matrix
            '.tpl-matrix { display: table; width: 100%; table-layout: fixed; }',
            '.tpl-matrix-cell { display: table-cell; width: 50%; vertical-align: top; padding: 4pt; border: 1px solid #ddd; }',
            // Checklist
            '.tpl-checklist { list-style: none; padding: 0; margin: 0; }',
            '.tpl-checklist li { padding: 2pt 0; border-bottom: 1px solid #f0ede8; }',
            // No shadows/borders on page
            '.template-container { box-shadow: none !important; border: none !important; }',
            '.template-page { box-shadow: none !important; border: none !important; }',
        ].join('\\n');

        // Build Word-compatible HTML document with proper page size
        // Word reads page size from <w:pgSz> inside <w:sectPr> XML, NOT from CSS @page
        var html = [
            '<html xmlns:v="urn:schemas-microsoft-com:vml"',
            ' xmlns:o="urn:schemas-microsoft-com:office:office"',
            ' xmlns:w="urn:schemas-microsoft-com:office:word"',
            ' xmlns="http://www.w3.org/TR/REC-html40">',
            '<head>',
            '<meta charset="utf-8">',
            '<!--[if gte mso 9]>',
            '<xml>',
            '<w:WordDocument>',
            '<w:View>Print</w:View>',
            '<w:Zoom>100</w:Zoom>',
            '<w:DoNotOptimizeForBrowser/>',
            '</w:WordDocument>',
            '</xml>',
            '<![endif]-->',
            '<style>',
            '@page Section1 {',
            '  size: ' + pageW + ' ' + pageH + ';',
            '  mso-page-orientation: portrait;',
            '  margin: ' + pgMargin/20 + 'pt;',
            '  mso-header-margin: 0;',
            '  mso-footer-margin: 0;',
            '}',
            'div.Section1 { page: Section1; }',
            'body { font-family: "Segoe UI", Arial, Helvetica, sans-serif; margin: 0; padding: 0; }',
            css,
            wordCSS,
            '</style>',
            '</head>',
            '<body>',
            '<div class="Section1">',
            processedHTML,
            // Section break with explicit page size via w:sectPr + w:pgSz
            '<p style="font-size:1pt;mso-hide:all;">&nbsp;</p>',
            '<!--[if gte mso 9]>',
            '<xml>',
            '<w:sectPr>',
            '<w:pgSz w:w="' + pgW + '" w:h="' + pgH + '" w:orient="portrait"/>',
            '<w:pgMar w:top="' + pgMargin + '" w:right="' + pgMargin + '" w:bottom="' + pgMargin + '" w:left="' + pgMargin + '" w:header="0" w:footer="0" w:gutter="0"/>',
            '</w:sectPr>',
            '</xml>',
            '<![endif]-->',
            '</div>',
            '</body></html>'
        ].join('\n');

        // Create Blob and trigger download
        var blob = new Blob([html], {
            type: 'application/msword'
        });

        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);

        // Reset button
        btnWord.textContent = '✅ Saved!';
        setTimeout(function () {
            btnWord.textContent = originalText;
            btnWord.disabled = false;
        }, 2000);
    }

    // ─── Paper Size Change ──────────────────────────────────────
    function onPaperSizeChange() {
        // Re-generate if template is already showing
        if (!templateContainer.querySelector('.empty-state')) {
            generate();
        }
        savePreferences();
    }

    // ─── Preferences ────────────────────────────────────────────
    function savePreferences() {
        try {
            localStorage.setItem('lp-template', templateSelect.value);
            localStorage.setItem('lp-paper', paperSizeSelect.value);
            localStorage.setItem('lp-theme', themeSelect.value);
        } catch (e) {
            // localStorage may not be available
        }
    }

    function loadPreferences() {
        try {
            const savedTemplate = localStorage.getItem('lp-template');
            const savedPaper = localStorage.getItem('lp-paper');
            const savedTheme = localStorage.getItem('lp-theme');

            if (savedTemplate) templateSelect.value = savedTemplate;
            if (savedPaper) paperSizeSelect.value = savedPaper;
            if (savedTheme) themeSelect.value = savedTheme;
        } catch (e) {
            // localStorage may not be available
        }
    }

    // ─── Version Display ────────────────────────────────────────
    function updateVersionDisplay() {
        const versionEl = document.getElementById('app-version');
        const yearEl = document.getElementById('app-year');
        if (versionEl && typeof APP_CONFIG !== 'undefined') {
            versionEl.textContent = APP_CONFIG.version;
        }
        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }
    }

    // ─── Helpers ────────────────────────────────────────────────
    function formatInputDate(date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }

    function formatFileDate(date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }

    // ─── Start ──────────────────────────────────────────────────
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();

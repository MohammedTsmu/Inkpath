/* ============================================================
   Inkpath — Daily Templates
   ============================================================ */

const DailyTemplates = {

    // ─── Full Daily Planner ─────────────────────────────────────
    'daily-planner': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = I18N.formatDate(date);
        const dayName = I18N.getDayName(date);
        const dir = I18N.getDir();
        const align = I18N.isRTL() ? 'left' : 'right';

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${dir}" id="daily-planner">
            <!-- Header -->
            <div class="tpl-header">
                <div>
                    <h2>${t('daily.title')}</h2>
                    <div class="tpl-subtitle">${t('daily.subtitle')}</div>
                </div>
                <div style="text-align:${align}">
                    <div class="tpl-date">${dayName}</div>
                    <div class="tpl-date">${dateStr}</div>
                </div>
            </div>

            <!-- Intention & Quote -->
            <div class="tpl-quote-box">
                ${t('daily.quote')}
            </div>

            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> ${t('daily.intention')}</div>
                <div class="tpl-line" style="min-height:2em"></div>
            </div>

            <div class="tpl-sidebar-layout">
                <div>
                    <!-- Top 3 Priorities -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">⭐</span> ${t('daily.top3')}</div>
                        <ul class="tpl-checklist">
                            <li><span class="tpl-priority high">1</span><div class="tpl-check-line"></div></li>
                            <li><span class="tpl-priority high">2</span><div class="tpl-check-line"></div></li>
                            <li><span class="tpl-priority medium">3</span><div class="tpl-check-line"></div></li>
                        </ul>
                    </div>

                    <!-- Time Block Schedule -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">🕐</span> ${t('daily.timeBlocks')}</div>
                        <div class="tpl-timeblock">
                            ${generateTimeBlocks(isA5 ? 7 : 5, isA5 ? 20 : 22)}
                        </div>
                    </div>

                    <!-- To-Do List -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">✅</span> ${t('daily.tasks')}</div>
                        <ul class="tpl-checklist">
                            ${repeat(isA5 ? 4 : 7, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                        </ul>
                    </div>
                </div>

                <div>
                    <!-- Procrastination Guard -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">🛡️</span> ${t('daily.procrastinationGuard')}</div>
                        <div class="tpl-box">
                            <div class="tpl-box-title">${t('daily.whatAvoiding')}</div>
                            <div class="tpl-line"></div>
                            <div class="tpl-line"></div>
                            <div class="tpl-box-title" style="margin-top:0.4rem">${t('daily.why')}</div>
                            <div class="tpl-line"></div>
                            <div class="tpl-box-title" style="margin-top:0.4rem">${t('daily.firstStep')}</div>
                            <div class="tpl-line"></div>
                        </div>
                    </div>

                    <!-- Energy Level Tracker -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">⚡</span> ${t('daily.energyTracker')}</div>
                        <div class="tpl-box">
                            <div class="tpl-line-labeled">
                                <span class="label">${t('daily.morning')}</span>
                                <div class="tpl-rating">
                                    ${repeat(5, '<div class="tpl-rating-dot"></div>')}
                                </div>
                            </div>
                            <div class="tpl-line-labeled" style="margin-top:0.3rem">
                                <span class="label">${t('daily.afternoon')}</span>
                                <div class="tpl-rating">
                                    ${repeat(5, '<div class="tpl-rating-dot"></div>')}
                                </div>
                            </div>
                            <div class="tpl-line-labeled" style="margin-top:0.3rem">
                                <span class="label">${t('daily.evening')}</span>
                                <div class="tpl-rating">
                                    ${repeat(5, '<div class="tpl-rating-dot"></div>')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Screen Time Awareness -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">📵</span> ${t('daily.screenFree')}</div>
                        <div class="tpl-box">
                            <div class="tpl-line-labeled">
                                <span class="label">${t('daily.maxScreenHrs')}</span>
                                <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div>
                            </div>
                            <div class="tpl-line-labeled" style="margin-top:0.3rem">
                                <span class="label">${t('daily.actualHrs')}</span>
                                <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Gratitude -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">🙏</span> ${t('daily.gratitude')}</div>
                        <div class="tpl-lines-group">
                            <div class="tpl-line"></div>
                            <div class="tpl-line"></div>
                            <div class="tpl-line"></div>
                        </div>
                    </div>

                    <!-- End of Day Review -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">🌙</span> ${t('daily.endOfDay')}</div>
                        <div class="tpl-box">
                            <div class="tpl-box-title">${t('daily.winOfDay')}</div>
                            <div class="tpl-line"></div>
                            <div class="tpl-box-title" style="margin-top:0.3rem">${t('daily.improve')}</div>
                            <div class="tpl-line"></div>
                            <div class="tpl-box-title" style="margin-top:0.3rem">${t('daily.mood')}</div>
                            <div class="tpl-rating">
                                ${repeat(5, '<div class="tpl-rating-dot"></div>')}
                                <span class="tpl-rating-label">😔 → 😊</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">${t('daily.mantra')}</div>
        </div>`;
    },

    // ─── Daily Time Blocker ─────────────────────────────────────
    'daily-timeblock': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = I18N.formatDate(date);
        const dayName = I18N.getDayName(date);
        const dir = I18N.getDir();
        const align = I18N.isRTL() ? 'left' : 'right';

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${dir}" id="daily-timeblock">
            <div class="tpl-header">
                <div>
                    <h2>${t('timeblock.title')}</h2>
                    <div class="tpl-subtitle">${t('timeblock.subtitle')}</div>
                </div>
                <div style="text-align:${align}">
                    <div class="tpl-date">${dayName}, ${dateStr}</div>
                </div>
            </div>

            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> ${t('timeblock.goal')}</div>
                <div class="tpl-highlight-box">
                    <div class="tpl-line" style="border-color:#d4c48a"></div>
                </div>
            </div>

            <div class="tpl-2col">
                <div>
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">🌅</span> ${t('timeblock.morningBlock')}</div>
                        <div class="tpl-timeblock">
                            ${generateTimeBlocks(5, 12)}
                        </div>
                    </div>
                </div>
                <div>
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">☀️</span> ${t('timeblock.afternoonBlock')}</div>
                        <div class="tpl-timeblock">
                            ${generateTimeBlocks(12, 18)}
                        </div>
                    </div>
                </div>
            </div>

            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🌙</span> ${t('timeblock.eveningBlock')}</div>
                <div class="tpl-timeblock">
                    ${generateTimeBlocks(18, 22)}
                </div>
            </div>

            <div class="tpl-2col" style="margin-top:0.75rem">
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">📋</span> ${t('timeblock.notes')}</div>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                    </div>
                </div>
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">📵</span> ${t('timeblock.timeWasters')}</div>
                    <ul class="tpl-checklist">
                        <li><div class="tpl-checkbox"></div><span class="tpl-check-label" style="color:#999">${t('timeblock.socialMedia')}</span></li>
                        <li><div class="tpl-checkbox"></div><span class="tpl-check-label" style="color:#999">${t('timeblock.browsing')}</span></li>
                        <li><div class="tpl-checkbox"></div><span class="tpl-check-label" style="color:#999">${t('timeblock.messaging')}</span></li>
                        <li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>
                        <li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>
                    </ul>
                </div>
            </div>

            <div class="tpl-mantra">${t('timeblock.mantra')}</div>
        </div>`;
    },

    // ─── Deep Focus Day ─────────────────────────────────────────
    'daily-focus': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = I18N.formatDate(date);
        const dir = I18N.getDir();

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${dir}" id="daily-focus">
            <div class="tpl-header">
                <div>
                    <h2>${t('focus.title')}</h2>
                    <div class="tpl-subtitle">${t('focus.subtitle')}</div>
                </div>
                <div class="tpl-date">${dateStr}</div>
            </div>

            <!-- Pre-Work Ritual -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🧘</span> ${t('focus.preWork')}</div>
                <ul class="tpl-checklist">
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label">${t('focus.phoneAway')}</span></li>
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label">${t('focus.workspaceReady')}</span></li>
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label">${t('focus.waterReady')}</span></li>
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label">${t('focus.intentionSet')}</span></li>
                </ul>
            </div>

            <!-- Focus Sessions (Pomodoro-style) -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🍅</span> ${t('focus.sessions')}</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th style="width:60px">#</th>
                            <th>${t('focus.taskDeepWork')}</th>
                            <th style="width:60px">${t('focus.start')}</th>
                            <th style="width:60px">${t('focus.end')}</th>
                            <th style="width:40px">✓</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(isA5 ? 6 : 8, (i) => `
                        <tr>
                            <td>${i + 1}</td>
                            <td class="wide"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>`)}
                    </tbody>
                </table>
            </div>

            <!-- Distractions Log -->
            <div class="tpl-2col">
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">🚫</span> ${t('focus.distractionLog')}</div>
                    <p style="font-size:0.7rem;color:#999;margin-bottom:0.3rem">${t('focus.distractionHint')}</p>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 4 : 6, '<div class="tpl-line"></div>')}
                    </div>
                </div>

                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">🏆</span> ${t('focus.focusScore')}</div>
                    <div class="tpl-box">
                        <div class="tpl-line-labeled">
                            <span class="label">${t('focus.sessionsCompleted')}</span>
                            <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1"></div>
                        </div>
                        <div class="tpl-line-labeled" style="margin-top:0.4rem">
                            <span class="label">${t('focus.distractions')}</span>
                            <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1"></div>
                        </div>
                        <div class="tpl-box-title" style="margin-top:0.6rem">${t('focus.focusQuality')}</div>
                        <div class="tpl-rating">
                            ${repeat(10, '<div class="tpl-rating-dot"></div>')}
                        </div>
                        <span class="tpl-rating-label">${t('focus.scatteredLaser')}</span>
                    </div>
                </div>
            </div>

            <!-- Post-Work Reflection -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📝</span> ${t('focus.reflection')}</div>
                <div class="tpl-box">
                    <div class="tpl-box-title">${t('focus.whatAccomplish')}</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.3rem">${t('focus.whatBrokeFocus')}</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.3rem">${t('focus.howImprove')}</div>
                    <div class="tpl-line"></div>
                </div>
            </div>

            <div class="tpl-mantra">${t('focus.mantra')}</div>
        </div>`;
    }
};

// ─── Helpers ────────────────────────────────────────────────

function generateTimeBlocks(startHour, endHour) {
    let html = '';
    for (let h = startHour; h < endHour; h++) {
        let label;
        if (I18N.isRTL()) {
            label = h < 12 ? `${h}ص` : h === 12 ? '12م' : `${h - 12}م`;
        } else {
            label = h < 12 ? `${h}AM` : h === 12 ? '12PM' : `${h - 12}PM`;
        }
        const isHighlight = (h >= 9 && h <= 11) || (h >= 14 && h <= 16);
        html += `<div class="tpl-timeblock-row">
            <div class="tpl-timeblock-time">${label}</div>
            <div class="tpl-timeblock-slot${isHighlight ? ' highlight' : ''}"></div>
        </div>`;
    }
    return html;
}

function repeat(n, templateOrFn) {
    let html = '';
    for (let i = 0; i < n; i++) {
        html += typeof templateOrFn === 'function' ? templateOrFn(i) : templateOrFn;
    }
    return html;
}

function formatDate(date) {
    return I18N.formatDate(date);
}

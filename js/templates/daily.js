/* ============================================================
   Inkpath — Daily Templates
   ============================================================ */

const DailyTemplates = {

    // ─── Full Daily Planner ─────────────────────────────────────
    'daily-planner': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = formatDate(date);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="daily-planner">
            <!-- Header -->
            <div class="tpl-header">
                <div>
                    <h2>Daily Planner</h2>
                    <div class="tpl-subtitle">Plan your day. Own your time.</div>
                </div>
                <div style="text-align:right">
                    <div class="tpl-date">${dayName}</div>
                    <div class="tpl-date">${dateStr}</div>
                </div>
            </div>

            <!-- Intention & Quote -->
            <div class="tpl-quote-box">
                "The secret of getting ahead is getting started." — Mark Twain
            </div>

            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> Today's Intention</div>
                <div class="tpl-line" style="min-height:2em"></div>
            </div>

            <div class="tpl-sidebar-layout">
                <div>
                    <!-- Top 3 Priorities -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">⭐</span> Top 3 Priorities</div>
                        <ul class="tpl-checklist">
                            <li><span class="tpl-priority high">1</span><div class="tpl-check-line"></div></li>
                            <li><span class="tpl-priority high">2</span><div class="tpl-check-line"></div></li>
                            <li><span class="tpl-priority medium">3</span><div class="tpl-check-line"></div></li>
                        </ul>
                    </div>

                    <!-- Time Block Schedule -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">🕐</span> Time Blocks</div>
                        <div class="tpl-timeblock">
                            ${generateTimeBlocks(isA5 ? 7 : 5, isA5 ? 20 : 22)}
                        </div>
                    </div>

                    <!-- To-Do List -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">✅</span> Tasks</div>
                        <ul class="tpl-checklist">
                            ${repeat(isA5 ? 4 : 7, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                        </ul>
                    </div>
                </div>

                <div>
                    <!-- Procrastination Guard -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">🛡️</span> Procrastination Guard</div>
                        <div class="tpl-box">
                            <div class="tpl-box-title">What am I avoiding?</div>
                            <div class="tpl-line"></div>
                            <div class="tpl-line"></div>
                            <div class="tpl-box-title" style="margin-top:0.4rem">Why?</div>
                            <div class="tpl-line"></div>
                            <div class="tpl-box-title" style="margin-top:0.4rem">First tiny step:</div>
                            <div class="tpl-line"></div>
                        </div>
                    </div>

                    <!-- Energy Level Tracker -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">⚡</span> Energy Tracker</div>
                        <div class="tpl-box">
                            <div class="tpl-line-labeled">
                                <span class="label">Morning</span>
                                <div class="tpl-rating">
                                    ${repeat(5, '<div class="tpl-rating-dot"></div>')}
                                </div>
                            </div>
                            <div class="tpl-line-labeled" style="margin-top:0.3rem">
                                <span class="label">Afternoon</span>
                                <div class="tpl-rating">
                                    ${repeat(5, '<div class="tpl-rating-dot"></div>')}
                                </div>
                            </div>
                            <div class="tpl-line-labeled" style="margin-top:0.3rem">
                                <span class="label">Evening</span>
                                <div class="tpl-rating">
                                    ${repeat(5, '<div class="tpl-rating-dot"></div>')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Screen Time Awareness -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">📵</span> Screen-Free Goals</div>
                        <div class="tpl-box">
                            <div class="tpl-line-labeled">
                                <span class="label">Max screen hrs:</span>
                                <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div>
                            </div>
                            <div class="tpl-line-labeled" style="margin-top:0.3rem">
                                <span class="label">Actual hrs:</span>
                                <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Gratitude -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">🙏</span> Gratitude</div>
                        <div class="tpl-lines-group">
                            <div class="tpl-line"></div>
                            <div class="tpl-line"></div>
                            <div class="tpl-line"></div>
                        </div>
                    </div>

                    <!-- End of Day Review -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">🌙</span> End of Day Review</div>
                        <div class="tpl-box">
                            <div class="tpl-box-title">Win of the day:</div>
                            <div class="tpl-line"></div>
                            <div class="tpl-box-title" style="margin-top:0.3rem">What to improve:</div>
                            <div class="tpl-line"></div>
                            <div class="tpl-box-title" style="margin-top:0.3rem">Overall mood:</div>
                            <div class="tpl-rating">
                                ${repeat(5, '<div class="tpl-rating-dot"></div>')}
                                <span class="tpl-rating-label">😔 → 😊</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">Remember: Progress, not perfection.</div>
        </div>`;
    },

    // ─── Daily Time Blocker ─────────────────────────────────────
    'daily-timeblock': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = formatDate(date);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="daily-timeblock">
            <div class="tpl-header">
                <div>
                    <h2>Time Blocker</h2>
                    <div class="tpl-subtitle">Block your time. Protect your focus.</div>
                </div>
                <div style="text-align:right">
                    <div class="tpl-date">${dayName}, ${dateStr}</div>
                </div>
            </div>

            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> Today's #1 Goal</div>
                <div class="tpl-highlight-box">
                    <div class="tpl-line" style="border-color:#d4c48a"></div>
                </div>
            </div>

            <div class="tpl-2col">
                <div>
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">🌅</span> Morning Block (5AM – 12PM)</div>
                        <div class="tpl-timeblock">
                            ${generateTimeBlocks(5, 12)}
                        </div>
                    </div>
                </div>
                <div>
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">☀️</span> Afternoon Block (12PM – 6PM)</div>
                        <div class="tpl-timeblock">
                            ${generateTimeBlocks(12, 18)}
                        </div>
                    </div>
                </div>
            </div>

            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🌙</span> Evening Block (6PM – 10PM)</div>
                <div class="tpl-timeblock">
                    ${generateTimeBlocks(18, 22)}
                </div>
            </div>

            <div class="tpl-2col" style="margin-top:0.75rem">
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">📋</span> Notes</div>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                    </div>
                </div>
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">📵</span> Time Wasters to Avoid</div>
                    <ul class="tpl-checklist">
                        <li><div class="tpl-checkbox"></div><span class="tpl-check-label" style="color:#999">Social media</span></li>
                        <li><div class="tpl-checkbox"></div><span class="tpl-check-label" style="color:#999">Unnecessary browsing</span></li>
                        <li><div class="tpl-checkbox"></div><span class="tpl-check-label" style="color:#999">Excessive messaging</span></li>
                        <li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>
                        <li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>
                    </ul>
                </div>
            </div>

            <div class="tpl-mantra">Every hour counts. Spend them wisely.</div>
        </div>`;
    },

    // ─── Deep Focus Day ─────────────────────────────────────────
    'daily-focus': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = formatDate(date);

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="daily-focus">
            <div class="tpl-header">
                <div>
                    <h2>Deep Focus Day</h2>
                    <div class="tpl-subtitle">Eliminate distractions. Do the deep work.</div>
                </div>
                <div class="tpl-date">${dateStr}</div>
            </div>

            <!-- Pre-Work Ritual -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🧘</span> Pre-Work Ritual</div>
                <ul class="tpl-checklist">
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label">Phone in another room / off</span></li>
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label">Workspace clean & ready</span></li>
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label">Water / snack prepared</span></li>
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label">Clear intention set</span></li>
                </ul>
            </div>

            <!-- Focus Sessions (Pomodoro-style) -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🍅</span> Focus Sessions (50 min work / 10 min break)</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th style="width:60px">#</th>
                            <th>Task / Deep Work</th>
                            <th style="width:60px">Start</th>
                            <th style="width:60px">End</th>
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
                    <div class="tpl-section-title"><span class="icon">🚫</span> Distraction Log</div>
                    <p style="font-size:0.7rem;color:#999;margin-bottom:0.3rem">Write it down, then return to focus.</p>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 4 : 6, '<div class="tpl-line"></div>')}
                    </div>
                </div>

                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">🏆</span> Focus Score</div>
                    <div class="tpl-box">
                        <div class="tpl-line-labeled">
                            <span class="label">Sessions completed:</span>
                            <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1"></div>
                        </div>
                        <div class="tpl-line-labeled" style="margin-top:0.4rem">
                            <span class="label">Distractions:</span>
                            <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1"></div>
                        </div>
                        <div class="tpl-box-title" style="margin-top:0.6rem">Focus quality:</div>
                        <div class="tpl-rating">
                            ${repeat(10, '<div class="tpl-rating-dot"></div>')}
                        </div>
                        <span class="tpl-rating-label">Scattered → Laser</span>
                    </div>
                </div>
            </div>

            <!-- Post-Work Reflection -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📝</span> End of Day Reflection</div>
                <div class="tpl-box">
                    <div class="tpl-box-title">What deep work did I accomplish?</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.3rem">What broke my focus?</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.3rem">How to improve tomorrow:</div>
                    <div class="tpl-line"></div>
                </div>
            </div>

            <div class="tpl-mantra">"Deep work is the superpower of the 21st century." — Cal Newport</div>
        </div>`;
    }
};

// ─── Helpers ────────────────────────────────────────────────

function generateTimeBlocks(startHour, endHour) {
    let html = '';
    for (let h = startHour; h < endHour; h++) {
        const label = h < 12 ? `${h}AM` : h === 12 ? '12PM' : `${h - 12}PM`;
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
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

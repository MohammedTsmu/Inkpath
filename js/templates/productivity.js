/* ============================================================
   Inkpath — Productivity Templates (Brain Dump, Projects, Routines)
   ============================================================ */

const ProductivityTemplates = {

    // ─── Brain Dump ─────────────────────────────────────────────
    'brain-dump': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = formatDate(date);

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="brain-dump">
            <div class="tpl-header">
                <div>
                    <h2>Brain Dump</h2>
                    <div class="tpl-subtitle">Get it ALL out of your head. Then organize.</div>
                </div>
                <div class="tpl-date">${dateStr}</div>
            </div>

            <div class="tpl-quote-box">
                "Your mind is for having ideas, not holding them." — David Allen
            </div>

            <!-- Step 1: Dump Everything -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🧠</span> Step 1: Dump Everything (no filter, no order)</div>
                <div class="tpl-lines-group">
                    ${repeat(isA5 ? 12 : 18, '<div class="tpl-line"></div>')}
                </div>
            </div>

            <!-- Step 2: Categorize -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📂</span> Step 2: Sort Into Buckets</div>
                <div class="${isA5 ? 'tpl-2col' : 'tpl-3col'}">
                    <div class="tpl-box">
                        <div class="tpl-box-title">🔥 Do Now</div>
                        <div class="tpl-lines-group">
                            ${repeat(isA5 ? 3 : 5, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">📅 Schedule Later</div>
                        <div class="tpl-lines-group">
                            ${repeat(isA5 ? 3 : 5, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">👋 Delegate / Drop</div>
                        <div class="tpl-lines-group">
                            ${repeat(isA5 ? 3 : 5, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Step 3: Next Actions -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">⚡</span> Step 3: My Next 3 Actions (right now!)</div>
                <ul class="tpl-checklist">
                    ${repeat(3, (i) => `<li><span class="tpl-priority high">${i + 1}</span><div class="tpl-check-line"></div></li>`)}
                </ul>
            </div>

            <div class="tpl-mantra">Clear mind → Clear action → Clear results.</div>
        </div>`;
    },

    // ─── Project Planner ────────────────────────────────────────
    'project-planner': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = formatDate(date);
        const milestoneCount = isA5 ? 4 : 6;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="project-planner">
            <div class="tpl-header">
                <div>
                    <h2>Project Planner</h2>
                    <div class="tpl-subtitle">Big goals need a plan. Break it down.</div>
                </div>
                <div class="tpl-date">${dateStr}</div>
            </div>

            <!-- Project Definition -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📌</span> Project Definition</div>
                <div class="tpl-box">
                    <div class="tpl-line-labeled"><span class="label">Project name:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1.2em"></div></div>
                    <div class="tpl-line-labeled" style="margin-top:0.3rem"><span class="label">Why it matters:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1.2em"></div></div>
                    <div style="display:flex;gap:1rem;margin-top:0.3rem">
                        <div class="tpl-line-labeled"><span class="label">Start date:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em;min-width:60px"></div></div>
                        <div class="tpl-line-labeled"><span class="label">Deadline:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em;min-width:60px"></div></div>
                    </div>
                    <div class="tpl-line-labeled" style="margin-top:0.3rem"><span class="label">Done looks like:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1.2em"></div></div>
                </div>
            </div>

            <!-- Milestones -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🏁</span> Milestones & Phases</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th style="width:30px">#</th>
                            <th>Milestone</th>
                            <th style="width:70px">Due By</th>
                            <th style="width:60px">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(milestoneCount, (i) => `
                        <tr>
                            <td>${i + 1}</td>
                            <td class="wide"></td>
                            <td></td>
                            <td></td>
                        </tr>`)}
                    </tbody>
                </table>
            </div>

            <!-- Current Milestone Tasks -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">✅</span> Current Phase — Tasks</div>
                <ul class="tpl-checklist">
                    ${repeat(isA5 ? 6 : 8, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                </ul>
            </div>

            <!-- Risks & Resources -->
            <div class="${isA5 ? '' : 'tpl-2col'}">
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">⚠️</span> Risks & Blockers</div>
                    <div class="tpl-lines-group">
                        ${repeat(3, '<div class="tpl-line"></div>')}
                    </div>
                </div>
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">🔧</span> Resources Needed</div>
                    <div class="tpl-lines-group">
                        ${repeat(3, '<div class="tpl-line"></div>')}
                    </div>
                </div>
            </div>

            <!-- Progress -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📊</span> Overall Progress</div>
                <div class="tpl-progress-bar">
                    ${repeat(10, '<div class="tpl-progress-segment"></div>')}
                </div>
                <div style="display:flex;justify-content:space-between;font-size:0.6rem;color:#aaa;margin-top:0.15rem">
                    <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                </div>
            </div>

            <div class="tpl-mantra">Every big project is just a series of small steps.</div>
        </div>`;
    },

    // ─── Morning & Evening Routines ─────────────────────────────
    'routines': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const weekDates = getWeekDates(date);
        const weekRange = `${formatDateShort(weekDates[0])} — ${formatDateShort(weekDates[6])}`;
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

        const morningHabits = [
            'Wake up on time', 'No phone for 30 min', 'Drink water',
            'Exercise / Stretch', 'Shower & dress', 'Healthy breakfast',
            'Review daily plan', 'Set intention'
        ];

        const eveningHabits = [
            'Review the day', 'Prepare tomorrow\'s plan', 'Tidy workspace',
            'Screen off by ___', 'Read / Journal', 'Gratitude (3 things)',
            'Hygiene routine', 'Lights out by ___'
        ];

        const habitCount = isA5 ? 6 : 8;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="routines">
            <div class="tpl-header">
                <div>
                    <h2>Morning & Evening Routines</h2>
                    <div class="tpl-subtitle">Win the morning. Own the evening. Repeat.</div>
                </div>
                <div class="tpl-date">${weekRange}</div>
            </div>

            <!-- Morning Routine -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🌅</span> Morning Routine</div>
                <table class="tpl-habit-grid">
                    <thead>
                        <tr>
                            <th class="habit-name">Morning Habit</th>
                            ${days.map(d => `<th>${d}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${morningHabits.slice(0, habitCount).map(h => `
                        <tr>
                            <td class="habit-label"><span style="color:#aaa">${h}</span></td>
                            ${repeat(7, '<td></td>')}
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>

            <!-- Evening Routine -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🌙</span> Evening Routine</div>
                <table class="tpl-habit-grid">
                    <thead>
                        <tr>
                            <th class="habit-name">Evening Habit</th>
                            ${days.map(d => `<th>${d}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${eveningHabits.slice(0, habitCount).map(h => `
                        <tr>
                            <td class="habit-label"><span style="color:#aaa">${h}</span></td>
                            ${repeat(7, '<td></td>')}
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>

            <!-- Routine Score -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📊</span> Weekly Routine Score</div>
                <div class="${isA5 ? '' : 'tpl-2col'}">
                    <div class="tpl-box">
                        <div class="tpl-box-title">Morning routine completion:</div>
                        <div class="tpl-progress-bar">
                            ${repeat(7, '<div class="tpl-progress-segment"></div>')}
                        </div>
                        <div style="font-size:0.6rem;color:#aaa;margin-top:0.1rem">____ / 7 days</div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">Evening routine completion:</div>
                        <div class="tpl-progress-bar">
                            ${repeat(7, '<div class="tpl-progress-segment"></div>')}
                        </div>
                        <div style="font-size:0.6rem;color:#aaa;margin-top:0.1rem">____ / 7 days</div>
                    </div>
                </div>
            </div>

            <!-- Adjustments -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">💡</span> What to Adjust Next Week</div>
                <div class="tpl-lines-group">
                    ${repeat(isA5 ? 2 : 3, '<div class="tpl-line"></div>')}
                </div>
            </div>

            <div class="tpl-mantra">Routine is not the enemy of creativity — it's the foundation.</div>
        </div>`;
    }
};

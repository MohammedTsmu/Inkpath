/* ============================================================
   Inkpath — Weekly Templates
   ============================================================ */

const WeeklyTemplates = {

    // ─── Weekly Planner ─────────────────────────────────────────
    'weekly-planner': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const weekDates = getWeekDates(date);
        const weekRange = `${formatDateShort(weekDates[0])} — ${formatDateShort(weekDates[6])}`;
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="weekly-planner">
            <div class="tpl-header">
                <div>
                    <h2>Weekly Planner</h2>
                    <div class="tpl-subtitle">Plan the week. Win the week.</div>
                </div>
                <div class="tpl-date">${weekRange}</div>
            </div>

            <!-- Weekly Goals -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> This Week's Top Goals</div>
                <ul class="tpl-checklist">
                    ${repeat(3, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                </ul>
            </div>

            <!-- Day-by-day Grid -->
            <div class="tpl-section">
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th style="width:90px">Day</th>
                            <th>Key Tasks / Appointments</th>
                            <th style="width:${isA5 ? '50px' : '70px'}">Priority</th>
                            <th style="width:40px">✓</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${days.map((day, i) => `
                        <tr>
                            <td style="text-align:left;font-weight:600">${isA5 ? day.substring(0, 3) : day}<br>
                            <span style="font-size:0.65rem;color:#999;font-weight:400">${formatDateShort(weekDates[i])}</span></td>
                            <td class="wide" style="height:${isA5 ? '2.8em' : '3.2em'}"></td>
                            <td></td>
                            <td></td>
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>

            <div class="${isA5 ? '' : 'tpl-2col'}">
                <!-- Meal Planning -->
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">🍽️</span> Meal Prep Notes</div>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                    </div>
                </div>

                <!-- Weekly Commitments -->
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">📵</span> Screen-Free Commitments</div>
                    <ul class="tpl-checklist">
                        <li><div class="tpl-checkbox"></div><span class="tpl-check-label" style="color:#999">No phone first hour of day</span></li>
                        <li><div class="tpl-checkbox"></div><span class="tpl-check-label" style="color:#999">No screens after 9 PM</span></li>
                        <li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>
                        <li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>
                    </ul>
                </div>
            </div>

            <!-- Notes -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📝</span> Notes & Ideas</div>
                <div class="tpl-lines-group">
                    ${repeat(isA5 ? 2 : 3, '<div class="tpl-line"></div>')}
                </div>
            </div>

            <div class="tpl-mantra">Consistency beats intensity. Show up every day.</div>
        </div>`;
    },

    // ─── Weekly Habit Tracker ───────────────────────────────────
    'weekly-habits': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const weekDates = getWeekDates(date);
        const weekRange = `${formatDateShort(weekDates[0])} — ${formatDateShort(weekDates[6])}`;
        const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const habitCount = isA5 ? 8 : 12;

        const defaultHabits = [
            'Wake up early', 'Exercise / Walk', 'Read 20+ min',
            'No social media', 'Drink 8 glasses water', 'Meditate',
            'Journal / Reflect', 'Screen-free evening', 'Plan next day',
            'Healthy meals', 'Practice gratitude', '8 hrs sleep'
        ];

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="weekly-habits">
            <div class="tpl-header">
                <div>
                    <h2>Weekly Habit Tracker</h2>
                    <div class="tpl-subtitle">Small daily habits = massive results.</div>
                </div>
                <div class="tpl-date">${weekRange}</div>
            </div>

            <div class="tpl-section">
                <table class="tpl-habit-grid">
                    <thead>
                        <tr>
                            <th class="habit-name">Habit</th>
                            ${dayLabels.map(d => `<th>${d}</th>`).join('')}
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(habitCount, (i) => `
                        <tr>
                            <td class="habit-label">${i < defaultHabits.length ? `<span style="color:#aaa">${defaultHabits[i]}</span>` : ''}</td>
                            ${repeat(7, '<td></td>')}
                            <td></td>
                        </tr>`)}
                    </tbody>
                </table>
            </div>

            <!-- Scoring -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📊</span> Weekly Score</div>
                <div class="tpl-2col">
                    <div class="tpl-box">
                        <div class="tpl-box-title">Completion Rate</div>
                        <div class="tpl-progress-bar">
                            ${repeat(10, '<div class="tpl-progress-segment"></div>')}
                        </div>
                        <div style="display:flex;justify-content:space-between;font-size:0.6rem;color:#aaa;margin-top:0.15rem">
                            <span>0%</span><span>50%</span><span>100%</span>
                        </div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">Best streak this week:</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-box-title" style="margin-top:0.3rem">Hardest habit:</div>
                        <div class="tpl-line"></div>
                    </div>
                </div>
            </div>

            <!-- Time Waster Analysis -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">⏳</span> Time Waster Log</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>Activity</th>
                            <th style="width:70px">Hrs Lost</th>
                            <th>What I'll Do Instead</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(isA5 ? 3 : 4, '<tr><td class="wide"></td><td></td><td class="wide"></td></tr>')}
                    </tbody>
                </table>
            </div>

            <!-- Reflection -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">💭</span> Weekly Notes</div>
                <div class="tpl-lines-group">
                    ${repeat(isA5 ? 2 : 3, '<div class="tpl-line"></div>')}
                </div>
            </div>

            <div class="tpl-mantra">You don't rise to the level of your goals. You fall to the level of your habits.</div>
        </div>`;
    },

    // ─── Weekly Review ──────────────────────────────────────────
    'weekly-review': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const weekDates = getWeekDates(date);
        const weekRange = `${formatDateShort(weekDates[0])} — ${formatDateShort(weekDates[6])}`;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="weekly-review">
            <div class="tpl-header">
                <div>
                    <h2>Weekly Review</h2>
                    <div class="tpl-subtitle">Reflect. Learn. Adjust. Repeat.</div>
                </div>
                <div class="tpl-date">${weekRange}</div>
            </div>

            <div class="tpl-2col">
                <!-- Wins -->
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">🏆</span> Wins This Week</div>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 3 : 5, '<div class="tpl-line"></div>')}
                    </div>
                </div>

                <!-- Challenges -->
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">🔥</span> Challenges Faced</div>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 3 : 5, '<div class="tpl-line"></div>')}
                    </div>
                </div>
            </div>

            <!-- Goals Review -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> Goals Check-In</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>Goal</th>
                            <th style="width:80px">Status</th>
                            <th>Notes / Next Steps</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(isA5 ? 3 : 5, '<tr><td class="wide"></td><td></td><td class="wide"></td></tr>')}
                    </tbody>
                </table>
            </div>

            <!-- Procrastination Audit -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🛡️</span> Procrastination Audit</div>
                <div class="tpl-box">
                    <div class="tpl-box-title">Tasks I kept delaying:</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.4rem">Root cause (fear, boredom, unclear?):</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.4rem">Strategy for next week:</div>
                    <div class="tpl-line"></div>
                </div>
            </div>

            <!-- Time Audit -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">⏰</span> Time Audit</div>
                <div class="${isA5 ? '' : 'tpl-2col'}">
                    <div class="tpl-box">
                        <div class="tpl-box-title">Hours well spent on:</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-line"></div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">Hours wasted on:</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-line"></div>
                    </div>
                </div>
            </div>

            <!-- Overall Rating -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📊</span> Week Rating</div>
                <div class="tpl-2col">
                    <div>
                        <div class="tpl-line-labeled">
                            <span class="label">Productivity:</span>
                            <div class="tpl-rating">${repeat(10, '<div class="tpl-rating-dot"></div>')}</div>
                        </div>
                        <div class="tpl-line-labeled" style="margin-top:0.3rem">
                            <span class="label">Wellbeing:</span>
                            <div class="tpl-rating">${repeat(10, '<div class="tpl-rating-dot"></div>')}</div>
                        </div>
                    </div>
                    <div>
                        <div class="tpl-line-labeled">
                            <span class="label">Focus:</span>
                            <div class="tpl-rating">${repeat(10, '<div class="tpl-rating-dot"></div>')}</div>
                        </div>
                        <div class="tpl-line-labeled" style="margin-top:0.3rem">
                            <span class="label">Screen discipline:</span>
                            <div class="tpl-rating">${repeat(10, '<div class="tpl-rating-dot"></div>')}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Next Week Prep -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">➡️</span> Next Week Focus</div>
                <div class="tpl-lines-group">
                    ${repeat(3, '<div class="tpl-line"></div>')}
                </div>
            </div>

            <div class="tpl-mantra">Reflection is the bridge between experience and growth.</div>
        </div>`;
    }
};

// ─── Weekly Helpers ─────────────────────────────────────────

function getWeekDates(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Monday start
    const monday = new Date(d.setDate(diff));
    const dates = [];
    for (let i = 0; i < 7; i++) {
        dates.push(new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i));
    }
    return dates;
}

function formatDateShort(date) {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

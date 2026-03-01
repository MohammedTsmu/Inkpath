/* ============================================================
   Inkpath — Monthly Templates
   ============================================================ */

const MonthlyTemplates = {

    // ─── Monthly Planner ────────────────────────────────────────
    'monthly-planner': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const monthName = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="monthly-planner">
            <div class="tpl-header">
                <div>
                    <h2>Monthly Planner</h2>
                    <div class="tpl-subtitle">See the big picture. Plan with purpose.</div>
                </div>
                <div class="tpl-date">${monthName}</div>
            </div>

            <!-- Calendar Grid -->
            <div class="tpl-section">
                ${generateCalendarGrid(date)}
            </div>

            <!-- Key Dates & Deadlines -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📅</span> Key Dates & Deadlines</div>
                <div class="${isA5 ? '' : 'tpl-2col'}">
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 3 : 4, '<div class="tpl-line-labeled"><span class="label" style="min-width:30px">__/__</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1.2em"></div></div>')}
                    </div>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 3 : 4, '<div class="tpl-line-labeled"><span class="label" style="min-width:30px">__/__</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1.2em"></div></div>')}
                    </div>
                </div>
            </div>

            <!-- Monthly Focus Areas -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> Monthly Focus Areas</div>
                <div class="tpl-3col">
                    <div class="tpl-box">
                        <div class="tpl-box-title">Work / Career</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-line"></div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">Health / Wellness</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-line"></div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">Personal Growth</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-line"></div>
                    </div>
                </div>
            </div>

            <!-- Notes -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📝</span> Notes</div>
                <div class="tpl-lines-group">
                    ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                </div>
            </div>

            <div class="tpl-mantra">A month from now, you'll wish you had started today.</div>
        </div>`;
    },

    // ─── Monthly Goal Setter ────────────────────────────────────
    'monthly-goals': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const monthName = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="monthly-goals">
            <div class="tpl-header">
                <div>
                    <h2>Monthly Goal Setter</h2>
                    <div class="tpl-subtitle">Set. Plan. Execute. Review.</div>
                </div>
                <div class="tpl-date">${monthName}</div>
            </div>

            <!-- This Month's Theme -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🌟</span> This Month's Theme / Word</div>
                <div class="tpl-highlight-box">
                    <div class="tpl-line" style="border-color:#d4c48a;min-height:1.8em"></div>
                </div>
            </div>

            <!-- Big 3 Goals -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> Big 3 Goals</div>
                ${repeat(3, (i) => `
                <div class="tpl-box" style="margin-bottom:0.5rem">
                    <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.3rem">
                        <span class="tpl-priority ${i === 0 ? 'high' : i === 1 ? 'medium' : 'low'}">${i + 1}</span>
                        <div style="flex:1;border-bottom:1px solid #e0ddd8;min-height:1.2em"></div>
                    </div>
                    <div class="tpl-box-title">Key actions:</div>
                    <ul class="tpl-checklist">
                        ${repeat(3, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                    </ul>
                    <div style="display:flex;align-items:center;gap:0.5rem;margin-top:0.3rem">
                        <span class="label" style="font-size:0.65rem;color:#888">Deadline:</span>
                        <div style="flex:1;border-bottom:1px solid #e0ddd8;min-height:1em"></div>
                    </div>
                </div>`)}
            </div>

            <!-- Anti-Procrastination Plan -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🛡️</span> Anti-Procrastination Plan</div>
                <div class="${isA5 ? '' : 'tpl-2col'}">
                    <div class="tpl-box">
                        <div class="tpl-box-title">I tend to procrastinate when:</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-line"></div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">My counter-strategy:</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-line"></div>
                    </div>
                </div>
            </div>

            <!-- Reward System -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎁</span> Rewards (When I Complete Goals)</div>
                <div class="tpl-lines-group">
                    ${repeat(3, '<div class="tpl-line"></div>')}
                </div>
            </div>

            <div class="tpl-mantra">Set the goal. Make the plan. Do the work. Celebrate.</div>
        </div>`;
    },

    // ─── Monthly Habit Grid ─────────────────────────────────────
    'monthly-habits': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const monthName = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const displayDays = isA5 ? Math.min(daysInMonth, 16) : daysInMonth;
        const habitCount = isA5 ? 6 : 10;

        const defaultHabits = [
            'Wake up early', 'Exercise', 'Read', 'No social media',
            'Hydrate', 'Meditate', 'Journal', 'Screen-free evening',
            'Healthy eating', 'Plan next day'
        ];

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="monthly-habits">
            <div class="tpl-header">
                <div>
                    <h2>Monthly Habit Grid</h2>
                    <div class="tpl-subtitle">Track every day. Build the chain.</div>
                </div>
                <div class="tpl-date">${monthName}</div>
            </div>

            <div class="tpl-section">
                <div style="overflow-x:auto">
                    <table class="tpl-habit-grid" style="font-size:${isA5 ? '0.55rem' : '0.65rem'}">
                        <thead>
                            <tr>
                                <th class="habit-name">Habit</th>
                                ${repeat(displayDays, (i) => `<th>${i + 1}</th>`)}
                                <th>%</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${repeat(habitCount, (i) => `
                            <tr>
                                <td class="habit-label">${i < defaultHabits.length ? `<span style="color:#bbb">${defaultHabits[i]}</span>` : ''}</td>
                                ${repeat(displayDays, '<td></td>')}
                                <td></td>
                            </tr>`)}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Monthly Reflection -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📊</span> Monthly Summary</div>
                <div class="${isA5 ? '' : 'tpl-2col'}">
                    <div class="tpl-box">
                        <div class="tpl-box-title">Best habit this month:</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-box-title" style="margin-top:0.3rem">Hardest habit:</div>
                        <div class="tpl-line"></div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">Longest streak:</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-box-title" style="margin-top:0.3rem">Next month focus:</div>
                        <div class="tpl-line"></div>
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">Don't break the chain. Every check mark is a vote for who you want to become.</div>
        </div>`;
    }
};

// ─── Monthly Helpers ────────────────────────────────────────

function generateCalendarGrid(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let html = '<table class="tpl-calendar"><thead><tr>';
    dayNames.forEach(d => { html += `<th>${d}</th>`; });
    html += '</tr></thead><tbody><tr>';

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
        html += '<td class="empty"></td>';
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const cellDay = (firstDay + day - 1) % 7;
        if (cellDay === 0 && day !== 1) {
            html += '</tr><tr>';
        }
        html += `<td><span class="day-num">${day}</span></td>`;
    }

    // Fill remaining cells
    const lastDay = (firstDay + daysInMonth - 1) % 7;
    for (let i = lastDay + 1; i < 7; i++) {
        html += '<td class="empty"></td>';
    }

    html += '</tr></tbody></table>';
    return html;
}

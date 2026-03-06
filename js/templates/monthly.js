/* ============================================================
   Inkpath — Monthly Templates
   ============================================================ */

const MonthlyTemplates = {

    // ─── Monthly Planner ────────────────────────────────────────
    'monthly-planner': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const monthName = I18N.getMonthName(date);

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="monthly-planner" dir="${I18N.getDir()}">
            <div class="tpl-header">
                <div>
                    <h2>${t('monthly.title')}</h2>
                    <div class="tpl-subtitle">${t('monthly.subtitle')}</div>
                </div>
                <div class="tpl-date">${monthName}</div>
            </div>

            <!-- Calendar Grid -->
            <div class="tpl-section">
                ${generateCalendarGrid(date)}
            </div>

            <!-- Key Dates & Deadlines -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📅</span> ${t('monthly.keyDates')}</div>
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
                <div class="tpl-section-title"><span class="icon">🎯</span> ${t('monthly.focusAreas')}</div>
                <div class="tpl-3col">
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('monthly.workCareer')}</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-line"></div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('monthly.healthWellness')}</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-line"></div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('monthly.personalGrowth')}</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-line"></div>
                    </div>
                </div>
            </div>

            <!-- Notes -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📝</span> ${t('monthly.notes')}</div>
                <div class="tpl-lines-group">
                    ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                </div>
            </div>

            <div class="tpl-mantra">${t('monthly.mantra')}</div>
        </div>`;
    },

    // ─── Monthly Goal Setter ────────────────────────────────────
    'monthly-goals': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const monthName = I18N.getMonthName(date);

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="monthly-goals" dir="${I18N.getDir()}">
            <div class="tpl-header">
                <div>
                    <h2>${t('mgoals.title')}</h2>
                    <div class="tpl-subtitle">${t('mgoals.subtitle')}</div>
                </div>
                <div class="tpl-date">${monthName}</div>
            </div>

            <!-- This Month's Theme -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🌟</span> ${t('mgoals.theme')}</div>
                <div class="tpl-highlight-box">
                    <div class="tpl-line" style="border-color:#d4c48a;min-height:1.8em"></div>
                </div>
            </div>

            <!-- Big 3 Goals -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> ${t('mgoals.big3')}</div>
                ${repeat(3, (i) => `
                <div class="tpl-box" style="margin-bottom:0.5rem">
                    <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.3rem">
                        <span class="tpl-priority ${i === 0 ? 'high' : i === 1 ? 'medium' : 'low'}">${i + 1}</span>
                        <div style="flex:1;border-bottom:1px solid #e0ddd8;min-height:1.2em"></div>
                    </div>
                    <div class="tpl-box-title">${t('mgoals.keyActions')}</div>
                    <ul class="tpl-checklist">
                        ${repeat(3, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                    </ul>
                    <div style="display:flex;align-items:center;gap:0.5rem;margin-top:0.3rem">
                        <span class="label" style="font-size:0.65rem;color:#888">${t('mgoals.deadline')}</span>
                        <div style="flex:1;border-bottom:1px solid #e0ddd8;min-height:1em"></div>
                    </div>
                </div>`)}
            </div>

            <!-- Anti-Procrastination Plan -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🛡️</span> ${t('mgoals.antiProcrastination')}</div>
                <div class="${isA5 ? '' : 'tpl-2col'}">
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('mgoals.tendToProcrastinate')}</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-line"></div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('mgoals.counterStrategy')}</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-line"></div>
                    </div>
                </div>
            </div>

            <!-- Reward System -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎁</span> ${t('mgoals.rewards')}</div>
                <div class="tpl-lines-group">
                    ${repeat(3, '<div class="tpl-line"></div>')}
                </div>
            </div>

            <div class="tpl-mantra">${t('mgoals.mantra')}</div>
        </div>`;
    },

    // ─── Monthly Habit Grid ─────────────────────────────────────
    'monthly-habits': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const monthName = I18N.getMonthName(date);
        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const displayDays = isA5 ? Math.min(daysInMonth, 16) : daysInMonth;
        const habitCount = isA5 ? 6 : 10;

        const defaultHabits = [
            t('habits.wakeEarly'), t('habits.exercise'), t('habits.read'), t('habits.noSocial'),
            t('habits.water'), t('habits.meditate'), t('habits.journal'), t('habits.screenFreeEvening'),
            t('habits.healthyMeals'), t('habits.planNextDay')
        ];

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="monthly-habits" dir="${I18N.getDir()}">
            <div class="tpl-header">
                <div>
                    <h2>${t('mhabits.title')}</h2>
                    <div class="tpl-subtitle">${t('mhabits.subtitle')}</div>
                </div>
                <div class="tpl-date">${monthName}</div>
            </div>

            <div class="tpl-section">
                <div style="overflow-x:auto">
                    <table class="tpl-habit-grid" style="font-size:${isA5 ? '0.55rem' : '0.65rem'}">
                        <thead>
                            <tr>
                                <th class="habit-name">${t('habits.habit')}</th>
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
                <div class="tpl-section-title"><span class="icon">📊</span> ${t('mhabits.summary')}</div>
                <div class="${isA5 ? '' : 'tpl-2col'}">
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('mhabits.bestHabit')}</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-box-title" style="margin-top:0.3rem">${t('mhabits.hardestHabit')}</div>
                        <div class="tpl-line"></div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('mhabits.longestStreak')}</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-box-title" style="margin-top:0.3rem">${t('mhabits.nextMonthFocus')}</div>
                        <div class="tpl-line"></div>
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">${t('mhabits.mantra')}</div>
        </div>`;
    }
};

// ─── Monthly Helpers ────────────────────────────────────────

function generateCalendarGrid(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dayNames = I18N.isRTL()
        ? ['أح','إث','ثل','أر','خم','جم','سب']
        : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

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

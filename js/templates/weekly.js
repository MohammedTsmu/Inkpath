/* ============================================================
   Inkpath — Weekly Templates
   ============================================================ */

const WeeklyTemplates = {

    // ─── Weekly Planner ─────────────────────────────────────────
    'weekly-planner': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const weekDates = getWeekDates(date);
        const weekRange = `${I18N.formatDateShort(weekDates[0])} — ${I18N.formatDateShort(weekDates[6])}`;
        const dir = I18N.getDir();
        const dayKeys = ['day.mon','day.tue','day.wed','day.thu','day.fri','day.sat','day.sun'];
        const dayShortKeys = ['day.monShort','day.tueShort','day.wedShort','day.thuShort','day.friShort','day.satShort','day.sunShort'];

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${dir}" id="weekly-planner">
            <div class="tpl-header">
                <div>
                    <h2>${t('weekly.title')}</h2>
                    <div class="tpl-subtitle">${t('weekly.subtitle')}</div>
                </div>
                <div class="tpl-date">${weekRange}</div>
            </div>

            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> ${t('weekly.topGoals')}</div>
                <ul class="tpl-checklist">
                    ${repeat(3, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                </ul>
            </div>

            <div class="tpl-section">
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th style="width:90px">${t('weekly.day')}</th>
                            <th>${t('weekly.keyTasks')}</th>
                            <th style="width:${isA5 ? '50px' : '70px'}">${t('weekly.priority')}</th>
                            <th style="width:40px">✓</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dayKeys.map((dk, i) => `
                        <tr>
                            <td style="text-align:${I18N.isRTL() ? 'right' : 'left'};font-weight:600">${isA5 ? t(dayShortKeys[i]) : t(dk)}<br>
                            <span style="font-size:0.65rem;color:#999;font-weight:400">${I18N.formatDateShort(weekDates[i])}</span></td>
                            <td class="wide" style="height:${isA5 ? '2.8em' : '3.2em'}"></td>
                            <td></td>
                            <td></td>
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>

            <div class="${isA5 ? '' : 'tpl-2col'}">
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">🍽️</span> ${t('weekly.mealPrep')}</div>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                    </div>
                </div>

                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">📵</span> ${t('weekly.screenFree')}</div>
                    <ul class="tpl-checklist">
                        <li><div class="tpl-checkbox"></div><span class="tpl-check-label" style="color:#999">${t('weekly.noPhoneFirst')}</span></li>
                        <li><div class="tpl-checkbox"></div><span class="tpl-check-label" style="color:#999">${t('weekly.noScreensAfter')}</span></li>
                        <li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>
                        <li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>
                    </ul>
                </div>
            </div>

            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📝</span> ${t('weekly.notesIdeas')}</div>
                <div class="tpl-lines-group">
                    ${repeat(isA5 ? 2 : 3, '<div class="tpl-line"></div>')}
                </div>
            </div>

            <div class="tpl-mantra">${t('weekly.mantra')}</div>
        </div>`;
    },

    // ─── Weekly Habit Tracker ───────────────────────────────────
    'weekly-habits': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const weekDates = getWeekDates(date);
        const weekRange = `${I18N.formatDateShort(weekDates[0])} — ${I18N.formatDateShort(weekDates[6])}`;
        const dayShortKeys = ['day.monShort','day.tueShort','day.wedShort','day.thuShort','day.friShort','day.satShort','day.sunShort'];
        const habitCount = isA5 ? 8 : 12;
        const dir = I18N.getDir();

        const habitKeys = [
            'habits.wakeEarly', 'habits.exercise', 'habits.read',
            'habits.noSocial', 'habits.water', 'habits.meditate',
            'habits.journal', 'habits.screenFreeEvening', 'habits.planNextDay',
            'habits.healthyMeals', 'habits.gratitude', 'habits.sleep8'
        ];

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${dir}" id="weekly-habits">
            <div class="tpl-header">
                <div>
                    <h2>${t('habits.title')}</h2>
                    <div class="tpl-subtitle">${t('habits.subtitle')}</div>
                </div>
                <div class="tpl-date">${weekRange}</div>
            </div>

            <div class="tpl-section">
                <table class="tpl-habit-grid">
                    <thead>
                        <tr>
                            <th class="habit-name">${t('habits.habit')}</th>
                            ${dayShortKeys.map(dk => `<th>${t(dk)}</th>`).join('')}
                            <th>${t('habits.total')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(habitCount, (i) => `
                        <tr>
                            <td class="habit-label">${i < habitKeys.length ? `<span style="color:#aaa">${t(habitKeys[i])}</span>` : ''}</td>
                            ${repeat(7, '<td></td>')}
                            <td></td>
                        </tr>`)}
                    </tbody>
                </table>
            </div>

            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📊</span> ${t('habits.weeklyScore')}</div>
                <div class="tpl-2col">
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('habits.completionRate')}</div>
                        <div class="tpl-progress-bar">
                            ${repeat(10, '<div class="tpl-progress-segment"></div>')}
                        </div>
                        <div style="display:flex;justify-content:space-between;font-size:0.6rem;color:#aaa;margin-top:0.15rem">
                            <span>0%</span><span>50%</span><span>100%</span>
                        </div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('habits.bestStreak')}</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-box-title" style="margin-top:0.3rem">${t('habits.hardestHabit')}</div>
                        <div class="tpl-line"></div>
                    </div>
                </div>
            </div>

            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">⏳</span> ${t('habits.timeWasterLog')}</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>${t('habits.activity')}</th>
                            <th style="width:70px">${t('habits.hrsLost')}</th>
                            <th>${t('habits.whatInstead')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(isA5 ? 3 : 4, '<tr><td class="wide"></td><td></td><td class="wide"></td></tr>')}
                    </tbody>
                </table>
            </div>

            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">💭</span> ${t('habits.weeklyNotes')}</div>
                <div class="tpl-lines-group">
                    ${repeat(isA5 ? 2 : 3, '<div class="tpl-line"></div>')}
                </div>
            </div>

            <div class="tpl-mantra">${t('habits.mantra')}</div>
        </div>`;
    },

    // ─── Weekly Review ──────────────────────────────────────────
    'weekly-review': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const weekDates = getWeekDates(date);
        const weekRange = `${I18N.formatDateShort(weekDates[0])} — ${I18N.formatDateShort(weekDates[6])}`;
        const dir = I18N.getDir();

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${dir}" id="weekly-review">
            <div class="tpl-header">
                <div>
                    <h2>${t('review.title')}</h2>
                    <div class="tpl-subtitle">${t('review.subtitle')}</div>
                </div>
                <div class="tpl-date">${weekRange}</div>
            </div>

            <div class="tpl-2col">
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">🏆</span> ${t('review.wins')}</div>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 3 : 5, '<div class="tpl-line"></div>')}
                    </div>
                </div>

                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">🔥</span> ${t('review.challenges')}</div>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 3 : 5, '<div class="tpl-line"></div>')}
                    </div>
                </div>
            </div>

            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> ${t('review.goalsCheckIn')}</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>${t('review.goal')}</th>
                            <th style="width:80px">${t('review.status')}</th>
                            <th>${t('review.notesNextSteps')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(isA5 ? 3 : 5, '<tr><td class="wide"></td><td></td><td class="wide"></td></tr>')}
                    </tbody>
                </table>
            </div>

            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🛡️</span> ${t('review.procrastinationAudit')}</div>
                <div class="tpl-box">
                    <div class="tpl-box-title">${t('review.tasksDelaying')}</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.4rem">${t('review.rootCause')}</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.4rem">${t('review.strategyNext')}</div>
                    <div class="tpl-line"></div>
                </div>
            </div>

            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">⏰</span> ${t('review.timeAudit')}</div>
                <div class="${isA5 ? '' : 'tpl-2col'}">
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('review.hrsWellSpent')}</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-line"></div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('review.hrsWasted')}</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-line"></div>
                    </div>
                </div>
            </div>

            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📊</span> ${t('review.weekRating')}</div>
                <div class="tpl-2col">
                    <div>
                        <div class="tpl-line-labeled">
                            <span class="label">${t('review.productivity')}</span>
                            <div class="tpl-rating">${repeat(10, '<div class="tpl-rating-dot"></div>')}</div>
                        </div>
                        <div class="tpl-line-labeled" style="margin-top:0.3rem">
                            <span class="label">${t('review.wellbeing')}</span>
                            <div class="tpl-rating">${repeat(10, '<div class="tpl-rating-dot"></div>')}</div>
                        </div>
                    </div>
                    <div>
                        <div class="tpl-line-labeled">
                            <span class="label">${t('review.focus')}</span>
                            <div class="tpl-rating">${repeat(10, '<div class="tpl-rating-dot"></div>')}</div>
                        </div>
                        <div class="tpl-line-labeled" style="margin-top:0.3rem">
                            <span class="label">${t('review.screenDiscipline')}</span>
                            <div class="tpl-rating">${repeat(10, '<div class="tpl-rating-dot"></div>')}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">➡️</span> ${t('review.nextWeekFocus')}</div>
                <div class="tpl-lines-group">
                    ${repeat(3, '<div class="tpl-line"></div>')}
                </div>
            </div>

            <div class="tpl-mantra">${t('review.mantra')}</div>
        </div>`;
    }
};

// ─── Weekly Helpers ─────────────────────────────────────────

function getWeekDates(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(d.setDate(diff));
    const dates = [];
    for (let i = 0; i < 7; i++) {
        dates.push(new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i));
    }
    return dates;
}

function formatDateShort(date) {
    return I18N.formatDateShort(date);
}

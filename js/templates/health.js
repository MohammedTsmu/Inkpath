/* ============================================================
   Inkpath — Health & Fitness Templates
   ============================================================ */

const HealthTemplates = {

    // ─── Workout Log ────────────────────────────────────────────
    'workout-log': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const weekDates = getWeekDates(date);
        const weekRange = `${I18N.formatDateShort(weekDates[0])} — ${I18N.formatDateShort(weekDates[6])}`;
        const days = [t('day.monShort'), t('day.tueShort'), t('day.wedShort'), t('day.thuShort'), t('day.friShort'), t('day.satShort'), t('day.sunShort')];
        const exerciseRows = isA5 ? 6 : 8;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="workout-log" dir="${I18N.getDir()}">
            <div class="tpl-header">
                <div>
                    <h2>${t('workout.title')}</h2>
                    <div class="tpl-subtitle">${t('workout.subtitle')}</div>
                </div>
                <div class="tpl-date">${weekRange}</div>
            </div>

            <!-- Weekly Workout Plan -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🏋️</span> ${t('workout.weeklyPlan')}</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th style="width:45px">${t('workout.day')}</th>
                            <th>${t('workout.activity')}</th>
                            <th style="width:55px">${t('workout.duration')}</th>
                            <th style="width:55px">${t('workout.intensity')}</th>
                            <th style="width:35px">✓</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${days.map(d => `
                        <tr>
                            <td style="font-weight:600">${d}</td>
                            <td class="wide"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>

            <!-- Exercise Detail -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📋</span> ${t('workout.exerciseDetail')} (${t('workout.today')} ${I18N.formatDate(date)})</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>${t('workout.exercise')}</th>
                            <th style="width:50px">${t('workout.sets')}</th>
                            <th style="width:50px">${t('workout.reps')}</th>
                            <th style="width:60px">${t('workout.weight')}</th>
                            <th>${t('workout.notes')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(exerciseRows, '<tr><td class="wide"></td><td></td><td></td><td></td><td class="wide"></td></tr>')}
                    </tbody>
                </table>
            </div>

            <!-- Body Stats -->
            <div class="${isA5 ? '' : 'tpl-2col'}">
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">📏</span> ${t('workout.bodyStats')}</div>
                    <div class="tpl-box">
                        <div class="tpl-line-labeled"><span class="label">${t('workout.bodyWeight')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1"></div></div>
                        <div class="tpl-line-labeled" style="margin-top:0.25rem"><span class="label">${t('workout.waist')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1"></div></div>
                        <div class="tpl-line-labeled" style="margin-top:0.25rem"><span class="label">${t('workout.energy')}</span>
                            <div class="tpl-rating">${repeat(10, '<div class="tpl-rating-dot"></div>')}</div>
                        </div>
                    </div>
                </div>
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">💪</span> ${t('workout.weeklyWins')}</div>
                    <div class="tpl-lines-group">
                        ${repeat(3, '<div class="tpl-line"></div>')}
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">${t('workout.mantra')}</div>
        </div>`;
    },

    // ─── Meal Planner ───────────────────────────────────────────
    'meal-planner': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const weekDates = getWeekDates(date);
        const weekRange = `${I18N.formatDateShort(weekDates[0])} — ${I18N.formatDateShort(weekDates[6])}`;
        const days = [t('day.monShort'), t('day.tueShort'), t('day.wedShort'), t('day.thuShort'), t('day.friShort'), t('day.satShort'), t('day.sunShort')];

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="meal-planner" dir="${I18N.getDir()}">
            <div class="tpl-header">
                <div>
                    <h2>${t('meal.title')}</h2>
                    <div class="tpl-subtitle">${t('meal.subtitle')}</div>
                </div>
                <div class="tpl-date">${weekRange}</div>
            </div>

            <!-- Weekly Meals -->
            <div class="tpl-section">
                <table class="tpl-table" style="font-size:${isA5 ? '0.6rem' : '0.72rem'}">
                    <thead>
                        <tr>
                            <th style="width:40px">${t('workout.day')}</th>
                            <th>${t('meal.breakfast')}</th>
                            <th>${t('meal.lunch')}</th>
                            <th>${t('meal.dinner')}</th>
                            <th style="width:${isA5 ? '50px' : '70px'}">${t('meal.snacks')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${days.map(d => `
                        <tr style="height:${isA5 ? '2.2em' : '2.8em'}">
                            <td style="font-weight:600">${d}</td>
                            <td class="wide"></td>
                            <td class="wide"></td>
                            <td class="wide"></td>
                            <td></td>
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>

            <!-- Water + Nutrition -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">💧</span> ${t('meal.waterTracker')}</div>
                <table class="tpl-table" style="font-size:0.65rem">
                    <thead>
                        <tr>
                            <th style="width:40px">${t('workout.day')}</th>
                            ${repeat(8, (i) => `<th>${i + 1}</th>`)}
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${days.map(d => `
                        <tr>
                            <td style="font-weight:600">${d}</td>
                            ${repeat(8, '<td></td>')}
                            <td></td>
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>

            <!-- Grocery List -->
            <div class="${isA5 ? '' : 'tpl-2col'}">
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">🛒</span> ${t('meal.groceryList')}</div>
                    <div class="tpl-2col">
                        <ul class="tpl-checklist">
                            ${repeat(isA5 ? 5 : 8, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                        </ul>
                        <ul class="tpl-checklist">
                            ${repeat(isA5 ? 5 : 8, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                        </ul>
                    </div>
                </div>
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">📝</span> ${t('meal.prepNotes')}</div>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 3 : 5, '<div class="tpl-line"></div>')}
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">${t('meal.mantra')}</div>
        </div>`;
    },

    // ─── Sleep Tracker ──────────────────────────────────────────
    'sleep-tracker': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const monthName = I18N.getMonthName(date);
        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const rowCount = isA5 ? Math.min(daysInMonth, 20) : daysInMonth;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="sleep-tracker" dir="${I18N.getDir()}">
            <div class="tpl-header">
                <div>
                    <h2>${t('sleep.title')}</h2>
                    <div class="tpl-subtitle">${t('sleep.subtitle')}</div>
                </div>
                <div class="tpl-date">${monthName}</div>
            </div>

            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🌙</span> ${t('sleep.log')}</div>
                <table class="tpl-table" style="font-size:${isA5 ? '0.55rem' : '0.65rem'}">
                    <thead>
                        <tr>
                            <th style="width:30px">${t('workout.day')}</th>
                            <th style="width:55px">${t('sleep.bedtime')}</th>
                            <th style="width:55px">${t('sleep.wakeUp')}</th>
                            <th style="width:45px">${t('sleep.hours')}</th>
                            <th style="width:55px">${t('sleep.quality')}</th>
                            <th>${t('sleep.notes')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(rowCount, (i) => `
                        <tr>
                            <td style="color:#bbb">${i + 1}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><div class="tpl-rating" style="justify-content:center">${repeat(5, '<div class="tpl-rating-dot" style="width:8px;height:8px"></div>')}</div></td>
                            <td class="wide"></td>
                        </tr>`)}
                    </tbody>
                </table>
            </div>

            <!-- Sleep Habits Checklist -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">✅</span> ${t('sleep.hygiene')}</div>
                <ul class="tpl-checklist">
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label" style="color:#999">${t('sleep.noScreens')}</span></li>
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label" style="color:#999">${t('sleep.noCaffeine')}</span></li>
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label" style="color:#999">${t('sleep.coolRoom')}</span></li>
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label" style="color:#999">${t('sleep.consistentBedtime')}</span></li>
                </ul>
            </div>

            <!-- Monthly Summary -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📊</span> ${t('sleep.monthlySummary')}</div>
                <div class="${isA5 ? '' : 'tpl-3col'}">
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('sleep.avgHours')}</div>
                        <div class="tpl-line"></div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('sleep.bestNight')}</div>
                        <div class="tpl-line"></div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('sleep.worstNight')}</div>
                        <div class="tpl-line"></div>
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">${t('sleep.mantra')}</div>
        </div>`;
    }
};

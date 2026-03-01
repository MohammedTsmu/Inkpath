/* ============================================================
   Inkpath — Health & Fitness Templates
   ============================================================ */

const HealthTemplates = {

    // ─── Workout Log ────────────────────────────────────────────
    'workout-log': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const weekDates = getWeekDates(date);
        const weekRange = `${formatDateShort(weekDates[0])} — ${formatDateShort(weekDates[6])}`;
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const exerciseRows = isA5 ? 6 : 8;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="workout-log">
            <div class="tpl-header">
                <div>
                    <h2>Workout Log</h2>
                    <div class="tpl-subtitle">Show up. Push hard. Track progress.</div>
                </div>
                <div class="tpl-date">${weekRange}</div>
            </div>

            <!-- Weekly Workout Plan -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🏋️</span> Weekly Workout Plan</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th style="width:45px">Day</th>
                            <th>Workout / Activity</th>
                            <th style="width:55px">Duration</th>
                            <th style="width:55px">Intensity</th>
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
                <div class="tpl-section-title"><span class="icon">📋</span> Exercise Detail (Today: ${formatDate(date)})</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>Exercise</th>
                            <th style="width:50px">Sets</th>
                            <th style="width:50px">Reps</th>
                            <th style="width:60px">Weight</th>
                            <th>Notes</th>
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
                    <div class="tpl-section-title"><span class="icon">📏</span> Body Stats</div>
                    <div class="tpl-box">
                        <div class="tpl-line-labeled"><span class="label">Weight:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1"></div></div>
                        <div class="tpl-line-labeled" style="margin-top:0.25rem"><span class="label">Waist:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1"></div></div>
                        <div class="tpl-line-labeled" style="margin-top:0.25rem"><span class="label">Energy (1-10):</span>
                            <div class="tpl-rating">${repeat(10, '<div class="tpl-rating-dot"></div>')}</div>
                        </div>
                    </div>
                </div>
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">💪</span> Weekly Wins</div>
                    <div class="tpl-lines-group">
                        ${repeat(3, '<div class="tpl-line"></div>')}
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">Your body can do it. It's your mind you need to convince.</div>
        </div>`;
    },

    // ─── Meal Planner ───────────────────────────────────────────
    'meal-planner': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const weekDates = getWeekDates(date);
        const weekRange = `${formatDateShort(weekDates[0])} — ${formatDateShort(weekDates[6])}`;
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="meal-planner">
            <div class="tpl-header">
                <div>
                    <h2>Meal Planner</h2>
                    <div class="tpl-subtitle">Plan meals. Eat well. Save money.</div>
                </div>
                <div class="tpl-date">${weekRange}</div>
            </div>

            <!-- Weekly Meals -->
            <div class="tpl-section">
                <table class="tpl-table" style="font-size:${isA5 ? '0.6rem' : '0.72rem'}">
                    <thead>
                        <tr>
                            <th style="width:40px">Day</th>
                            <th>Breakfast</th>
                            <th>Lunch</th>
                            <th>Dinner</th>
                            <th style="width:${isA5 ? '50px' : '70px'}">Snacks</th>
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
                <div class="tpl-section-title"><span class="icon">💧</span> Daily Water Tracker (glasses)</div>
                <table class="tpl-table" style="font-size:0.65rem">
                    <thead>
                        <tr>
                            <th style="width:40px">Day</th>
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
                    <div class="tpl-section-title"><span class="icon">🛒</span> Grocery List</div>
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
                    <div class="tpl-section-title"><span class="icon">📝</span> Prep Notes</div>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 3 : 5, '<div class="tpl-line"></div>')}
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">You are what you eat. Plan it, don't wing it.</div>
        </div>`;
    },

    // ─── Sleep Tracker ──────────────────────────────────────────
    'sleep-tracker': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const monthName = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const rowCount = isA5 ? Math.min(daysInMonth, 20) : daysInMonth;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="sleep-tracker">
            <div class="tpl-header">
                <div>
                    <h2>Sleep Tracker</h2>
                    <div class="tpl-subtitle">Better sleep = better life. Track your rest.</div>
                </div>
                <div class="tpl-date">${monthName}</div>
            </div>

            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🌙</span> Sleep Log</div>
                <table class="tpl-table" style="font-size:${isA5 ? '0.55rem' : '0.65rem'}">
                    <thead>
                        <tr>
                            <th style="width:30px">Day</th>
                            <th style="width:55px">Bedtime</th>
                            <th style="width:55px">Wake Up</th>
                            <th style="width:45px">Hours</th>
                            <th style="width:55px">Quality</th>
                            <th>Notes (dreams, disruptions)</th>
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
                <div class="tpl-section-title"><span class="icon">✅</span> Sleep Hygiene Reminders</div>
                <ul class="tpl-checklist">
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label" style="color:#999">No screens 1 hour before bed</span></li>
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label" style="color:#999">No caffeine after 2 PM</span></li>
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label" style="color:#999">Cool, dark room</span></li>
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label" style="color:#999">Consistent bedtime</span></li>
                </ul>
            </div>

            <!-- Monthly Summary -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📊</span> Monthly Summary</div>
                <div class="${isA5 ? '' : 'tpl-3col'}">
                    <div class="tpl-box">
                        <div class="tpl-box-title">Avg hours / night:</div>
                        <div class="tpl-line"></div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">Best sleep night:</div>
                        <div class="tpl-line"></div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">Worst sleep night:</div>
                        <div class="tpl-line"></div>
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">Sleep is the foundation. Everything else is built on it.</div>
        </div>`;
    }
};

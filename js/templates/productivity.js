/* ============================================================
   Inkpath — Productivity Templates (Brain Dump, Projects, Routines)
   ============================================================ */

const ProductivityTemplates = {

    // ─── Brain Dump ─────────────────────────────────────────────
    'brain-dump': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = I18N.formatDate(date);

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${I18N.getDir()}" id="brain-dump">
            <div class="tpl-header">
                <div>
                    <h2>${t('braindump.title')}</h2>
                    <div class="tpl-subtitle">${t('braindump.subtitle')}</div>
                </div>
                <div class="tpl-date">${dateStr}</div>
            </div>

            <div class="tpl-quote-box">
                ${t('braindump.quote')}
            </div>

            <!-- Step 1: Dump Everything -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🧠</span> ${t('braindump.step1')}</div>
                <div class="tpl-lines-group">
                    ${repeat(isA5 ? 12 : 18, '<div class="tpl-line"></div>')}
                </div>
            </div>

            <!-- Step 2: Categorize -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📂</span> ${t('braindump.step2')}</div>
                <div class="${isA5 ? 'tpl-2col' : 'tpl-3col'}">
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('braindump.doNow')}</div>
                        <div class="tpl-lines-group">
                            ${repeat(isA5 ? 3 : 5, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('braindump.scheduleLater')}</div>
                        <div class="tpl-lines-group">
                            ${repeat(isA5 ? 3 : 5, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('braindump.delegateDrop')}</div>
                        <div class="tpl-lines-group">
                            ${repeat(isA5 ? 3 : 5, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Step 3: Next Actions -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">⚡</span> ${t('braindump.step3')}</div>
                <ul class="tpl-checklist">
                    ${repeat(3, (i) => `<li><span class="tpl-priority high">${i + 1}</span><div class="tpl-check-line"></div></li>`)}
                </ul>
            </div>

            <div class="tpl-mantra">${t('braindump.mantra')}</div>
        </div>`;
    },

    // ─── Project Planner ────────────────────────────────────────
    'project-planner': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = I18N.formatDate(date);
        const milestoneCount = isA5 ? 4 : 6;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${I18N.getDir()}" id="project-planner">
            <div class="tpl-header">
                <div>
                    <h2>${t('project.title')}</h2>
                    <div class="tpl-subtitle">${t('project.subtitle')}</div>
                </div>
                <div class="tpl-date">${dateStr}</div>
            </div>

            <!-- Project Definition -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📌</span> ${t('project.definition')}</div>
                <div class="tpl-box">
                    <div class="tpl-line-labeled"><span class="label">${t('project.name')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1.2em"></div></div>
                    <div class="tpl-line-labeled" style="margin-top:0.3rem"><span class="label">${t('project.whyMatters')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1.2em"></div></div>
                    <div style="display:flex;gap:1rem;margin-top:0.3rem">
                        <div class="tpl-line-labeled"><span class="label">${t('project.startDate')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em;min-width:60px"></div></div>
                        <div class="tpl-line-labeled"><span class="label">${t('project.deadline')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em;min-width:60px"></div></div>
                    </div>
                    <div class="tpl-line-labeled" style="margin-top:0.3rem"><span class="label">${t('project.doneLooksLike')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1.2em"></div></div>
                </div>
            </div>

            <!-- Milestones -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🏁</span> ${t('project.milestones')}</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th style="width:30px">#</th>
                            <th>${t('project.milestone')}</th>
                            <th style="width:70px">${t('project.dueBy')}</th>
                            <th style="width:60px">${t('project.status')}</th>
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
                <div class="tpl-section-title"><span class="icon">✅</span> ${t('project.currentTasks')}</div>
                <ul class="tpl-checklist">
                    ${repeat(isA5 ? 6 : 8, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                </ul>
            </div>

            <!-- Risks & Resources -->
            <div class="${isA5 ? '' : 'tpl-2col'}">
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">⚠️</span> ${t('project.risks')}</div>
                    <div class="tpl-lines-group">
                        ${repeat(3, '<div class="tpl-line"></div>')}
                    </div>
                </div>
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">🔧</span> ${t('project.resources')}</div>
                    <div class="tpl-lines-group">
                        ${repeat(3, '<div class="tpl-line"></div>')}
                    </div>
                </div>
            </div>

            <!-- Progress -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📊</span> ${t('project.progress')}</div>
                <div class="tpl-progress-bar">
                    ${repeat(10, '<div class="tpl-progress-segment"></div>')}
                </div>
                <div style="display:flex;justify-content:space-between;font-size:0.6rem;color:#aaa;margin-top:0.15rem">
                    <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                </div>
            </div>

            <div class="tpl-mantra">${t('project.mantra')}</div>
        </div>`;
    },

    // ─── Morning & Evening Routines ─────────────────────────────
    'routines': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const weekDates = getWeekDates(date);
        const weekRange = `${I18N.formatDateShort(weekDates[0])} — ${I18N.formatDateShort(weekDates[6])}`;
        const days = [t('day.monShort'), t('day.tueShort'), t('day.wedShort'), t('day.thuShort'), t('day.friShort'), t('day.satShort'), t('day.sunShort')];

        const morningHabits = [
            t('routines.wakeOnTime'), t('routines.noPhone30'), t('routines.drinkWater'),
            t('routines.exerciseStretch'), t('routines.showerDress'), t('routines.healthyBreakfast'),
            t('routines.reviewPlan'), t('routines.setIntention')
        ];

        const eveningHabits = [
            t('routines.reviewDay'), t('routines.prepTomorrow'), t('routines.tidyWorkspace'),
            t('routines.screenOff'), t('routines.readJournal'), t('routines.gratitude3'),
            t('routines.hygieneRoutine'), t('routines.lightsOut')
        ];

        const habitCount = isA5 ? 6 : 8;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${I18N.getDir()}" id="routines">
            <div class="tpl-header">
                <div>
                    <h2>${t('routines.title')}</h2>
                    <div class="tpl-subtitle">${t('routines.subtitle')}</div>
                </div>
                <div class="tpl-date">${weekRange}</div>
            </div>

            <!-- Morning Routine -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🌅</span> ${t('routines.morningRoutine')}</div>
                <table class="tpl-habit-grid">
                    <thead>
                        <tr>
                            <th class="habit-name">${t('routines.morningHabit')}</th>
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
                <div class="tpl-section-title"><span class="icon">🌙</span> ${t('routines.eveningRoutine')}</div>
                <table class="tpl-habit-grid">
                    <thead>
                        <tr>
                            <th class="habit-name">${t('routines.eveningHabit')}</th>
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
                <div class="tpl-section-title"><span class="icon">📊</span> ${t('routines.weeklyScore')}</div>
                <div class="${isA5 ? '' : 'tpl-2col'}">
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('routines.morningCompletion')}</div>
                        <div class="tpl-progress-bar">
                            ${repeat(7, '<div class="tpl-progress-segment"></div>')}
                        </div>
                        <div style="font-size:0.6rem;color:#aaa;margin-top:0.1rem">${t('routines.daysOf7')}</div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('routines.eveningCompletion')}</div>
                        <div class="tpl-progress-bar">
                            ${repeat(7, '<div class="tpl-progress-segment"></div>')}
                        </div>
                        <div style="font-size:0.6rem;color:#aaa;margin-top:0.1rem">${t('routines.daysOf7')}</div>
                    </div>
                </div>
            </div>

            <!-- Adjustments -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">💡</span> ${t('routines.adjustNext')}</div>
                <div class="tpl-lines-group">
                    ${repeat(isA5 ? 2 : 3, '<div class="tpl-line"></div>')}
                </div>
            </div>

            <div class="tpl-mantra">${t('routines.mantra')}</div>
        </div>`;
    }
};

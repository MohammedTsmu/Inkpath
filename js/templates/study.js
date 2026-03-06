/* ============================================================
   Inkpath — Study & Learning Templates
   ============================================================
   Templates for students: exam prep, daily study sessions,
   spaced repetition, Cornell notes, weekly timetable,
   assignment tracking, and subject review.
   ============================================================ */

const StudyTemplates = {

    // ─── Study Session Planner ──────────────────────────────────
    'study-session': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = I18N.formatDate(date);
        const dayName = I18N.getDayName(date);
        const sessionCount = isA5 ? 5 : 7;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${I18N.getDir()}" id="study-session">
            <div class="tpl-header">
                <div>
                    <h2>${t('studySession.title')}</h2>
                    <div class="tpl-subtitle">${t('studySession.subtitle')}</div>
                </div>
                <div style="text-align:right">
                    <div class="tpl-date">${dayName}</div>
                    <div class="tpl-date">${dateStr}</div>
                </div>
            </div>

            <div class="tpl-quote-box">
                ${t('studySession.quote')}
            </div>

            <!-- Today's Study Goal -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> ${t('studySession.goal')}</div>
                <div class="tpl-highlight-box">
                    <div class="tpl-line" style="border-color:#d4c48a"></div>
                </div>
            </div>

            <div class="tpl-sidebar-layout">
                <div>
                    <!-- Study Sessions (Pomodoro-style) -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">🍅</span> ${t('studySession.timeBlock')}</div>
                        <table class="tpl-table">
                            <thead>
                                <tr>
                                    <th style="width:30px">#</th>
                                    <th>${t('studySession.subject')} / ${t('studySession.topic')}</th>
                                    <th style="width:55px">${t('studySession.start')}</th>
                                    <th style="width:55px">${t('studySession.end')}</th>
                                    <th style="width:50px">${t('studySession.technique')}</th>
                                    <th style="width:30px">✓</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${repeat(sessionCount, (i) => `
                                <tr>
                                    <td>${i + 1}</td>
                                    <td class="wide"></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>`)}
                            </tbody>
                        </table>
                        <p style="font-size:0.6rem;color:#999;margin-top:0.2rem">${t('studySession.methods')}</p>
                    </div>

                    <!-- Topics Covered -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">📚</span> ${t('studySession.keyNotes')}</div>
                        <ul class="tpl-checklist">
                            ${repeat(isA5 ? 4 : 6, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                        </ul>
                    </div>
                </div>

                <div>
                    <!-- Pre-Study Checklist -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">✅</span> ${t('studySession.preStudy')}</div>
                        <ul class="tpl-checklist">
                            <li><div class="tpl-checkbox"></div><span class="tpl-check-label">${t('studySession.phoneSilenced')}</span></li>
                            <li><div class="tpl-checkbox"></div><span class="tpl-check-label">${t('studySession.materialsReady')}</span></li>
                            <li><div class="tpl-checkbox"></div><span class="tpl-check-label">${t('studySession.waterSnack')}</span></li>
                            <li><div class="tpl-checkbox"></div><span class="tpl-check-label">${t('studySession.spaceOrganized')}</span></li>
                            <li><div class="tpl-checkbox"></div><span class="tpl-check-label">${t('studySession.goalsClear')}</span></li>
                        </ul>
                    </div>

                    <!-- Difficulty & Confidence -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">📊</span> ${t('studySession.confidence')}</div>
                        <div class="tpl-box">
                            <div class="tpl-box-title">${t('studySession.before')}</div>
                            <div class="tpl-rating">
                                ${repeat(5, '<div class="tpl-rating-dot"></div>')}
                                <span class="tpl-rating-label">${t('studySession.lostToConfident')}</span>
                            </div>
                            <div class="tpl-box-title" style="margin-top:0.5rem">${t('studySession.after')}</div>
                            <div class="tpl-rating">
                                ${repeat(5, '<div class="tpl-rating-dot"></div>')}
                                <span class="tpl-rating-label">${t('studySession.lostToConfident')}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Struggle Points -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">❓</span> ${t('studySession.questions')}</div>
                        <div class="tpl-lines-group">
                            ${repeat(isA5 ? 3 : 5, '<div class="tpl-line"></div>')}
                        </div>
                    </div>

                    <!-- Energy -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">⚡</span> ${t('studySession.energy')}</div>
                        <div class="tpl-box">
                            <div class="tpl-line-labeled">
                                <span class="label">${t('studySession.focusLevel')}</span>
                                <div class="tpl-rating">
                                    ${repeat(5, '<div class="tpl-rating-dot"></div>')}
                                </div>
                            </div>
                            <div class="tpl-line-labeled" style="margin-top:0.3rem">
                                <span class="label">${t('studySession.distractions')}</span>
                                <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- End of Study Review -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🌙</span> ${t('studySession.summary')}</div>
                <div class="tpl-box">
                    <div style="display:flex;gap:1rem">
                        <div style="flex:1">
                            <div class="tpl-box-title">${t('studySession.learned')}</div>
                            <div class="tpl-line"></div>
                            <div class="tpl-line"></div>
                        </div>
                        <div style="flex:1">
                            <div class="tpl-box-title">${t('studySession.nextSession')}</div>
                            <div class="tpl-line"></div>
                            <div class="tpl-line"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">${t('studySession.mantra')}</div>
        </div>`;
    },

    // ─── Exam Countdown Planner ─────────────────────────────────
    'exam-countdown': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = I18N.formatDate(date);
        const weekCount = isA5 ? 4 : 6;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${I18N.getDir()}" id="exam-countdown">
            <div class="tpl-header">
                <div>
                    <h2>${t('exam.title')}</h2>
                    <div class="tpl-subtitle">${t('exam.subtitle')}</div>
                </div>
                <div class="tpl-date">${dateStr}</div>
            </div>

            <div class="tpl-quote-box">
                ${t('exam.quote')}
            </div>

            <!-- Exam Details -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📋</span> ${t('exam.details')}</div>
                <div class="tpl-box">
                    <div style="display:flex;gap:1rem;flex-wrap:wrap">
                        <div class="tpl-line-labeled" style="flex:1;min-width:150px"><span class="label">${t('exam.name')}:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="flex:1;min-width:120px"><span class="label">${t('exam.date')}:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    </div>
                    <div style="display:flex;gap:1rem;margin-top:0.3rem;flex-wrap:wrap">
                        <div class="tpl-line-labeled" style="flex:1;min-width:120px"><span class="label">${t('exam.daysLeft')}:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="flex:1;min-width:120px"><span class="label">${t('exam.type')}:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="flex:1;min-width:120px"><span class="label">${t('exam.targetGrade')}:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    </div>
                </div>
            </div>

            <!-- Syllabus Breakdown -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📖</span> ${t('exam.topics')}</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th style="width:30px">#</th>
                            <th>${t('exam.topic')}</th>
                            <th style="width:55px">${t('exam.weight')}</th>
                            <th style="width:65px">${t('exam.confidence')}</th>
                            <th style="width:55px">${t('exam.status')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(isA5 ? 7 : 10, (i) => `
                        <tr>
                            <td>${i + 1}</td>
                            <td class="wide"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>`)}
                    </tbody>
                </table>
                <p style="font-size:0.6rem;color:#999;margin-top:0.2rem">${t('exam.confidenceScale')}</p>
            </div>

            <!-- Weekly Revision Plan -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📅</span> ${t('exam.studyPlan')}</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th style="width:55px">${t('exam.week')}</th>
                            <th>${t('exam.focus')}</th>
                            <th style="width:70px">${t('exam.practice')}</th>
                            <th style="width:30px">✓</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(weekCount, (i) => `
                        <tr>
                            <td>${t('exam.week')} ${i + 1}</td>
                            <td class="wide"></td>
                            <td></td>
                            <td></td>
                        </tr>`)}
                    </tbody>
                </table>
            </div>

            ${!isA5 ? `
            <!-- Practice Tests -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📝</span> ${t('exam.practiceTests')}</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>${t('exam.testPaper')}</th>
                            <th style="width:55px">${t('exam.date')}</th>
                            <th style="width:50px">${t('exam.score')}</th>
                            <th>${t('exam.weakAreas')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(4, '<tr><td></td><td></td><td></td><td class="wide"></td></tr>')}
                    </tbody>
                </table>
            </div>` : ''}

            <!-- Exam Day Prep -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🏁</span> ${t('exam.lastMinute')}</div>
                <ul class="tpl-checklist">
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label">${t('exam.allTopicsReviewed')}</span></li>
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label">${t('exam.weakAreasExtra')}</span></li>
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label">${t('exam.practiceTestTimed')}</span></li>
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label">${t('exam.materialsReady')}</span></li>
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label">${t('exam.goodSleep')}</span></li>
                </ul>
            </div>

            <div class="tpl-mantra">${t('exam.mantra')}</div>
        </div>`;
    },

    // ─── Cornell Notes ──────────────────────────────────────────
    'cornell-notes': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = I18N.formatDate(date);
        const noteLines = isA5 ? 22 : 32;
        const cueLines = isA5 ? 6 : 8;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${I18N.getDir()}" id="cornell-notes">
            <div class="tpl-header">
                <div>
                    <h2>${t('cornell.title')}</h2>
                    <div class="tpl-subtitle">${t('cornell.subtitle')}</div>
                </div>
                <div class="tpl-date">${dateStr}</div>
            </div>

            <!-- Lecture / Topic Info -->
            <div class="tpl-section">
                <div class="tpl-box" style="padding:0.4rem 0.6rem">
                    <div style="display:flex;gap:1rem;flex-wrap:wrap">
                        <div class="tpl-line-labeled" style="flex:2;min-width:150px"><span class="label">${t('cornell.subject')}:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="flex:2;min-width:150px"><span class="label">${t('cornell.topic')}:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="flex:1;min-width:70px"><span class="label">${t('cornell.page')}:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    </div>
                </div>
            </div>

            <!-- Cornell Layout -->
            <div class="tpl-section" style="flex:1">
                <div style="display:flex;gap:0;border:1.5px solid #d5d0c8;border-radius:6px;overflow:hidden">
                    <!-- Cue Column (left, narrow) -->
                    <div style="width:30%;border-right:1.5px solid #d5d0c8;padding:0.5rem;background:rgba(74,128,96,0.03)">
                        <div style="font-size:0.7rem;font-weight:600;color:#4a8060;margin-bottom:0.4rem;text-transform:uppercase;letter-spacing:0.5px">${t('cornell.cues')}</div>
                        <div class="tpl-lines-group">
                            ${repeat(cueLines, '<div class="tpl-line" style="min-height:2.5em"></div>')}
                        </div>
                    </div>
                    <!-- Notes Column (right, wide) -->
                    <div style="width:70%;padding:0.5rem">
                        <div style="font-size:0.7rem;font-weight:600;color:#4a8060;margin-bottom:0.4rem;text-transform:uppercase;letter-spacing:0.5px">${t('cornell.notes')}</div>
                        <div class="tpl-lines-group">
                            ${repeat(noteLines, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Summary Section -->
            <div class="tpl-section">
                <div style="border:1.5px solid #d5d0c8;border-radius:6px;padding:0.5rem;background:rgba(74,128,96,0.03)">
                    <div style="font-size:0.7rem;font-weight:600;color:#4a8060;margin-bottom:0.3rem;text-transform:uppercase;letter-spacing:0.5px">${t('cornell.summary')}</div>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 3 : 5, '<div class="tpl-line"></div>')}
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">${t('cornell.mantra')}</div>
        </div>`;
    },

    // ─── Spaced Repetition Tracker ──────────────────────────────
    'spaced-repetition': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = I18N.formatDate(date);
        const topicCount = isA5 ? 12 : 18;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${I18N.getDir()}" id="spaced-repetition">
            <div class="tpl-header">
                <div>
                    <h2>${t('spaced.title')}</h2>
                    <div class="tpl-subtitle">${t('spaced.subtitle')}</div>
                </div>
                <div class="tpl-date">${dateStr}</div>
            </div>

            <div class="tpl-quote-box">
                ${t('spaced.quote')}
            </div>

            <!-- Subject Info -->
            <div class="tpl-section">
                <div class="tpl-box" style="padding:0.4rem 0.6rem">
                    <div style="display:flex;gap:1rem;flex-wrap:wrap">
                        <div class="tpl-line-labeled" style="flex:1"><span class="label">${t('spaced.subject')}:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="flex:1"><span class="label">${t('spaced.firstLearn')}:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    </div>
                </div>
            </div>

            <!-- Spaced Repetition Grid -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🧠</span> ${t('spaced.schedule')}</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th style="width:30px">#</th>
                            <th>${t('spaced.topic')}</th>
                            <th style="width:${isA5 ? '38px' : '48px'}">${t('spaced.day1')}</th>
                            <th style="width:${isA5 ? '38px' : '48px'}">${t('spaced.day3')}</th>
                            <th style="width:${isA5 ? '38px' : '48px'}">${t('spaced.day7')}</th>
                            <th style="width:${isA5 ? '38px' : '48px'}">${t('spaced.day14')}</th>
                            <th style="width:${isA5 ? '38px' : '48px'}">${t('spaced.day30')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(topicCount, (i) => `
                        <tr>
                            <td>${i + 1}</td>
                            <td class="wide"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>`)}
                    </tbody>
                </table>
                <p style="font-size:0.6rem;color:#999;margin-top:0.2rem">${t('spaced.legend')}</p>
            </div>

            ${!isA5 ? `
            <!-- Retention Notes -->
            <div class="tpl-2col">
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">💡</span> ${t('spaced.slipping')}</div>
                    <div class="tpl-lines-group">
                        ${repeat(4, '<div class="tpl-line"></div>')}
                    </div>
                </div>
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">🔗</span> ${t('spaced.mnemonics')}</div>
                    <div class="tpl-lines-group">
                        ${repeat(4, '<div class="tpl-line"></div>')}
                    </div>
                </div>
            </div>` : ''}

            <!-- Overall Mastery -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🏆</span> ${t('spaced.confidence')}</div>
                <div class="tpl-box">
                    <div style="display:flex;gap:1rem;align-items:center;flex-wrap:wrap">
                        <div class="tpl-line-labeled"><span class="label">${t('spaced.topicsMastered')}:</span><div class="line" style="border-bottom:1px solid #e0ddd8;min-width:40px"></div></div>
                        <div class="tpl-line-labeled"><span class="label">${t('spaced.needReview')}:</span><div class="line" style="border-bottom:1px solid #e0ddd8;min-width:40px"></div></div>
                        <div class="tpl-line-labeled"><span class="label">${t('spaced.totalTopics')}:</span><div class="line" style="border-bottom:1px solid #e0ddd8;min-width:40px"></div></div>
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">${t('spaced.mantra')}</div>
        </div>`;
    },

    // ─── Weekly Study Timetable ─────────────────────────────────
    'study-timetable': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = I18N.formatDate(date);
        const days = [t('day.monday'), t('day.tuesday'), t('day.wednesday'), t('day.thursday'), t('day.friday'), t('day.saturday'), t('day.sunday')];
        const daysShort = [t('day.mon'), t('day.tue'), t('day.wed'), t('day.thu'), t('day.fri'), t('day.sat'), t('day.sun')];
        const slotCount = isA5 ? 5 : 7;

        // Generate time slot rows
        const morningSlots = isA5 ? 3 : 4;
        const afternoonSlots = isA5 ? 2 : 3;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${I18N.getDir()}" id="study-timetable">
            <div class="tpl-header">
                <div>
                    <h2>${t('timetable.title')}</h2>
                    <div class="tpl-subtitle">${t('timetable.subtitle')}</div>
                </div>
                <div style="text-align:right">
                    <div class="tpl-date">${t('timetable.weekOf')} ${dateStr}</div>
                </div>
            </div>

            <div class="tpl-quote-box">
                ${t('timetable.quote')}
            </div>

            <!-- Weekly Goals -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> ${t('timetable.weeklyGoals')}</div>
                <div class="${isA5 ? 'tpl-2col' : 'tpl-3col'}">
                    <div class="tpl-box">
                        <div class="tpl-box-title">🔥 ${t('timetable.mustDo')}</div>
                        <div class="tpl-lines-group">
                            ${repeat(3, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">📌 ${t('timetable.shouldDo')}</div>
                        <div class="tpl-lines-group">
                            ${repeat(3, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                    ${!isA5 ? `
                    <div class="tpl-box">
                        <div class="tpl-box-title">💡 ${t('timetable.bonus')}</div>
                        <div class="tpl-lines-group">
                            ${repeat(3, '<div class="tpl-line"></div>')}
                        </div>
                    </div>` : ''}
                </div>
            </div>

            <!-- Timetable Grid -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📅</span> ${t('timetable.schedule')}</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th style="width:55px">${t('timetable.time')}</th>
                            ${days.map((d, i) => `<th>${isA5 ? daysShort[i] : d}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="background:rgba(74,128,96,0.05)">
                            <td colspan="${days.length + 1}" style="font-size:0.65rem;font-weight:600;color:#4a8060;text-align:left;padding:0.2rem 0.4rem">🌅 ${t('timetable.morning')}</td>
                        </tr>
                        ${repeat(morningSlots, (i) => `
                        <tr>
                            <td style="font-size:0.7rem">${6 + i * 2}:00</td>
                            ${repeat(7, '<td></td>')}
                        </tr>`)}
                        <tr style="background:rgba(74,128,96,0.05)">
                            <td colspan="${days.length + 1}" style="font-size:0.65rem;font-weight:600;color:#4a8060;text-align:left;padding:0.2rem 0.4rem">☀️ ${t('timetable.afternoon')}</td>
                        </tr>
                        ${repeat(afternoonSlots, (i) => `
                        <tr>
                            <td style="font-size:0.7rem">${12 + i * 2}:00</td>
                            ${repeat(7, '<td></td>')}
                        </tr>`)}
                        <tr style="background:rgba(74,128,96,0.05)">
                            <td colspan="${days.length + 1}" style="font-size:0.65rem;font-weight:600;color:#4a8060;text-align:left;padding:0.2rem 0.4rem">🌙 ${t('timetable.evening')}</td>
                        </tr>
                        ${repeat(2, (i) => `
                        <tr>
                            <td style="font-size:0.7rem">${18 + i * 2}:00</td>
                            ${repeat(7, '<td></td>')}
                        </tr>`)}
                    </tbody>
                </table>
            </div>

            <!-- Weekly Summary -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📊</span> ${t('timetable.weeklySummary')}</div>
                <div class="tpl-box">
                    <div style="display:flex;gap:1rem;flex-wrap:wrap">
                        <div class="tpl-line-labeled"><span class="label">${t('timetable.totalHours')}:</span><div class="line" style="border-bottom:1px solid #e0ddd8;min-width:40px"></div></div>
                        <div class="tpl-line-labeled"><span class="label">${t('timetable.goalsCompleted')}:</span><div class="line" style="border-bottom:1px solid #e0ddd8;min-width:30px"></div><span class="label"> / </span><div class="line" style="border-bottom:1px solid #e0ddd8;min-width:30px"></div></div>
                        <div class="tpl-line-labeled"><span class="label">${t('timetable.productivity')}:</span>
                            <div class="tpl-rating">
                                ${repeat(5, '<div class="tpl-rating-dot"></div>')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">${t('timetable.mantra')}</div>
        </div>`;
    },

    // ─── Assignment Tracker ─────────────────────────────────────
    'assignment-tracker': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = I18N.formatDate(date);
        const assignmentCount = isA5 ? 8 : 12;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${I18N.getDir()}" id="assignment-tracker">
            <div class="tpl-header">
                <div>
                    <h2>${t('assignment.title')}</h2>
                    <div class="tpl-subtitle">${t('assignment.subtitle')}</div>
                </div>
                <div style="text-align:right">
                    <div class="tpl-date">${dateStr}</div>
                </div>
            </div>

            <div class="tpl-quote-box">
                ${t('assignment.quote')}
            </div>

            <!-- Term / Semester Info -->
            <div class="tpl-section">
                <div class="tpl-box" style="padding:0.4rem 0.6rem">
                    <div style="display:flex;gap:1rem;flex-wrap:wrap">
                        <div class="tpl-line-labeled" style="flex:1"><span class="label">${t('assignment.semester')}:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="flex:1"><span class="label">${t('assignment.period')}:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    </div>
                </div>
            </div>

            <!-- Assignment Grid -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📝</span> ${t('assignment.deadlines')}</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th style="width:25px">#</th>
                            <th>${t('assignment.assignment')}</th>
                            <th style="width:${isA5 ? '60px' : '75px'}">${t('assignment.subject')}</th>
                            <th style="width:${isA5 ? '55px' : '65px'}">${t('assignment.due')}</th>
                            <th style="width:${isA5 ? '40px' : '50px'}">${t('assignment.priority')}</th>
                            <th style="width:${isA5 ? '45px' : '55px'}">${t('assignment.status')}</th>
                            <th style="width:${isA5 ? '35px' : '45px'}">${t('assignment.grade')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(assignmentCount, (i) => `
                        <tr>
                            <td>${i + 1}</td>
                            <td class="wide"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>`)}
                    </tbody>
                </table>
                <p style="font-size:0.6rem;color:#999;margin-top:0.2rem">${t('assignment.legend')}</p>
            </div>

            <!-- Upcoming Deadlines -->
            <div class="tpl-${isA5 ? '2col' : '2col'}">
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">🚨</span> ${t('assignment.upcoming')}</div>
                    <ul class="tpl-checklist">
                        ${repeat(isA5 ? 4 : 5, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                    </ul>
                </div>
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">📌</span> ${t('assignment.nextWeek')}</div>
                    <ul class="tpl-checklist">
                        ${repeat(isA5 ? 4 : 5, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                    </ul>
                </div>
            </div>

            ${!isA5 ? `
            <!-- Notes -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📋</span> ${t('assignment.notesReminders')}</div>
                <div class="tpl-lines-group">
                    ${repeat(3, '<div class="tpl-line"></div>')}
                </div>
            </div>` : ''}

            <!-- Grade Tracker -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📊</span> ${t('assignment.gradeSummary')}</div>
                <div class="tpl-box">
                    <div style="display:flex;gap:1rem;flex-wrap:wrap">
                        <div class="tpl-line-labeled"><span class="label">${t('assignment.completed')}:</span><div class="line" style="border-bottom:1px solid #e0ddd8;min-width:30px"></div><span class="label"> / </span><div class="line" style="border-bottom:1px solid #e0ddd8;min-width:30px"></div></div>
                        <div class="tpl-line-labeled"><span class="label">${t('assignment.averageGrade')}:</span><div class="line" style="border-bottom:1px solid #e0ddd8;min-width:40px"></div></div>
                        <div class="tpl-line-labeled"><span class="label">${t('assignment.onTimeRate')}:</span><div class="line" style="border-bottom:1px solid #e0ddd8;min-width:40px"></div></div>
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">${t('assignment.mantra')}</div>
        </div>`;
    },

    // ─── Subject Review Sheet ───────────────────────────────────
    'subject-review': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = I18N.formatDate(date);

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${I18N.getDir()}" id="subject-review">
            <div class="tpl-header">
                <div>
                    <h2>${t('subjectReview.title')}</h2>
                    <div class="tpl-subtitle">${t('subjectReview.subtitle')}</div>
                </div>
                <div class="tpl-date">${dateStr}</div>
            </div>

            <!-- Subject Details -->
            <div class="tpl-section">
                <div class="tpl-box" style="padding:0.4rem 0.6rem">
                    <div style="display:flex;gap:1rem;flex-wrap:wrap">
                        <div class="tpl-line-labeled" style="flex:2;min-width:150px"><span class="label">${t('subjectReview.subject')}:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="flex:2;min-width:150px"><span class="label">${t('subjectReview.chapter')}:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    </div>
                </div>
            </div>

            <!-- Key Concepts -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">💡</span> ${t('subjectReview.understand')}</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>${t('subjectReview.concept')}</th>
                            <th>${t('subjectReview.definition')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(isA5 ? 5 : 8, '<tr><td></td><td class="wide"></td></tr>')}
                    </tbody>
                </table>
            </div>

            <div class="tpl-2col">
                <!-- Important Formulas / Rules -->
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">📐</span> ${t('subjectReview.resources')}</div>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 5 : 8, '<div class="tpl-line" style="min-height:1.8em"></div>')}
                    </div>
                </div>

                <!-- Common Mistakes -->
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">⚠️</span> ${t('subjectReview.needWork')}</div>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 5 : 8, '<div class="tpl-line" style="min-height:1.8em"></div>')}
                    </div>
                </div>
            </div>

            <!-- Practice Problems -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">✏️</span> ${t('subjectReview.actionPlan')}</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th style="width:30px">#</th>
                            <th>${t('subjectReview.problem')}</th>
                            <th style="width:${isA5 ? '30px' : '40px'}">✓/✗</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(isA5 ? 4 : 6, (i) => `
                        <tr style="height:2em">
                            <td>${i + 1}</td>
                            <td class="wide"></td>
                            <td></td>
                        </tr>`)}
                    </tbody>
                </table>
            </div>

            <!-- Summary & Connections -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🔗</span> ${t('subjectReview.goal')}</div>
                <div class="tpl-box">
                    <div class="tpl-box-title">${t('subjectReview.connections')}</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.3rem">${t('subjectReview.mustRemember')}</div>
                    <div class="tpl-line"></div>
                </div>
            </div>

            <!-- Mastery -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🏆</span> ${t('subjectReview.progress')}</div>
                <div class="tpl-box">
                    <div class="tpl-rating">
                        ${repeat(10, '<div class="tpl-rating-dot"></div>')}
                    </div>
                    <span class="tpl-rating-label" style="display:block;text-align:center">${t('subjectReview.cluelessToExpert')}</span>
                </div>
            </div>

            <div class="tpl-mantra">${t('subjectReview.mantra')}</div>
        </div>`;
    }
};

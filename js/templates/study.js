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
        const dateStr = formatDate(date);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        const sessionCount = isA5 ? 5 : 7;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="study-session">
            <div class="tpl-header">
                <div>
                    <h2>Study Session Planner</h2>
                    <div class="tpl-subtitle">Plan. Focus. Retain. Repeat.</div>
                </div>
                <div style="text-align:right">
                    <div class="tpl-date">${dayName}</div>
                    <div class="tpl-date">${dateStr}</div>
                </div>
            </div>

            <div class="tpl-quote-box">
                "The expert in anything was once a beginner." — Helen Hayes
            </div>

            <!-- Today's Study Goal -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> Today's Study Goal</div>
                <div class="tpl-highlight-box">
                    <div class="tpl-line" style="border-color:#d4c48a"></div>
                </div>
            </div>

            <div class="tpl-sidebar-layout">
                <div>
                    <!-- Study Sessions (Pomodoro-style) -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">🍅</span> Study Sessions (25 min focus / 5 min break)</div>
                        <table class="tpl-table">
                            <thead>
                                <tr>
                                    <th style="width:30px">#</th>
                                    <th>Subject / Topic</th>
                                    <th style="width:55px">Start</th>
                                    <th style="width:55px">End</th>
                                    <th style="width:50px">Method</th>
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
                        <p style="font-size:0.6rem;color:#999;margin-top:0.2rem">Methods: R = Read, N = Notes, P = Practice, F = Flashcards, T = Teach</p>
                    </div>

                    <!-- Topics Covered -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">📚</span> Topics Covered Today</div>
                        <ul class="tpl-checklist">
                            ${repeat(isA5 ? 4 : 6, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                        </ul>
                    </div>
                </div>

                <div>
                    <!-- Pre-Study Checklist -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">✅</span> Pre-Study Setup</div>
                        <ul class="tpl-checklist">
                            <li><div class="tpl-checkbox"></div><span class="tpl-check-label">Phone silenced / away</span></li>
                            <li><div class="tpl-checkbox"></div><span class="tpl-check-label">Materials ready</span></li>
                            <li><div class="tpl-checkbox"></div><span class="tpl-check-label">Water & snack prepared</span></li>
                            <li><div class="tpl-checkbox"></div><span class="tpl-check-label">Study space organized</span></li>
                            <li><div class="tpl-checkbox"></div><span class="tpl-check-label">Goals clear in mind</span></li>
                        </ul>
                    </div>

                    <!-- Difficulty & Confidence -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">📊</span> Confidence Check</div>
                        <div class="tpl-box">
                            <div class="tpl-box-title">Before studying:</div>
                            <div class="tpl-rating">
                                ${repeat(5, '<div class="tpl-rating-dot"></div>')}
                                <span class="tpl-rating-label">Lost → Confident</span>
                            </div>
                            <div class="tpl-box-title" style="margin-top:0.5rem">After studying:</div>
                            <div class="tpl-rating">
                                ${repeat(5, '<div class="tpl-rating-dot"></div>')}
                                <span class="tpl-rating-label">Lost → Confident</span>
                            </div>
                        </div>
                    </div>

                    <!-- Struggle Points -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">❓</span> Questions / Stuck Points</div>
                        <div class="tpl-lines-group">
                            ${repeat(isA5 ? 3 : 5, '<div class="tpl-line"></div>')}
                        </div>
                    </div>

                    <!-- Energy -->
                    <div class="tpl-section">
                        <div class="tpl-section-title"><span class="icon">⚡</span> Energy & Focus</div>
                        <div class="tpl-box">
                            <div class="tpl-line-labeled">
                                <span class="label">Focus level:</span>
                                <div class="tpl-rating">
                                    ${repeat(5, '<div class="tpl-rating-dot"></div>')}
                                </div>
                            </div>
                            <div class="tpl-line-labeled" style="margin-top:0.3rem">
                                <span class="label">Distractions:</span>
                                <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- End of Study Review -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🌙</span> End of Study Review</div>
                <div class="tpl-box">
                    <div style="display:flex;gap:1rem">
                        <div style="flex:1">
                            <div class="tpl-box-title">What I learned today:</div>
                            <div class="tpl-line"></div>
                            <div class="tpl-line"></div>
                        </div>
                        <div style="flex:1">
                            <div class="tpl-box-title">What to review tomorrow:</div>
                            <div class="tpl-line"></div>
                            <div class="tpl-line"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">Consistency beats intensity. Show up every day.</div>
        </div>`;
    },

    // ─── Exam Countdown Planner ─────────────────────────────────
    'exam-countdown': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = formatDate(date);
        const weekCount = isA5 ? 4 : 6;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="exam-countdown">
            <div class="tpl-header">
                <div>
                    <h2>Exam Countdown Planner</h2>
                    <div class="tpl-subtitle">Prepare smart. Stay calm. Crush the exam.</div>
                </div>
                <div class="tpl-date">${dateStr}</div>
            </div>

            <div class="tpl-quote-box">
                "Success is the sum of small efforts, repeated day in and day out." — Robert Collier
            </div>

            <!-- Exam Details -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📋</span> Exam Details</div>
                <div class="tpl-box">
                    <div style="display:flex;gap:1rem;flex-wrap:wrap">
                        <div class="tpl-line-labeled" style="flex:1;min-width:150px"><span class="label">Subject:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="flex:1;min-width:120px"><span class="label">Exam date:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    </div>
                    <div style="display:flex;gap:1rem;margin-top:0.3rem;flex-wrap:wrap">
                        <div class="tpl-line-labeled" style="flex:1;min-width:120px"><span class="label">Days left:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="flex:1;min-width:120px"><span class="label">Exam type:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="flex:1;min-width:120px"><span class="label">Target grade:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    </div>
                </div>
            </div>

            <!-- Syllabus Breakdown -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📖</span> Syllabus / Topics Breakdown</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th style="width:30px">#</th>
                            <th>Topic / Chapter</th>
                            <th style="width:55px">Weight</th>
                            <th style="width:65px">Confidence</th>
                            <th style="width:55px">Status</th>
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
                <p style="font-size:0.6rem;color:#999;margin-top:0.2rem">Confidence: 1–5 (1=no idea, 5=mastered) | Status: ⬜ Not started, 🔄 In progress, ✅ Done</p>
            </div>

            <!-- Weekly Revision Plan -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📅</span> Weekly Revision Plan</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th style="width:55px">Week</th>
                            <th>Focus Topics</th>
                            <th style="width:70px">Practice?</th>
                            <th style="width:30px">✓</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(weekCount, (i) => `
                        <tr>
                            <td>Week ${i + 1}</td>
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
                <div class="tpl-section-title"><span class="icon">📝</span> Practice Tests / Past Papers</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>Test / Paper</th>
                            <th style="width:55px">Date</th>
                            <th style="width:50px">Score</th>
                            <th>Weak Areas</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(4, '<tr><td></td><td></td><td></td><td class="wide"></td></tr>')}
                    </tbody>
                </table>
            </div>` : ''}

            <!-- Exam Day Prep -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🏁</span> Exam Day Checklist</div>
                <ul class="tpl-checklist">
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label">All topics reviewed at least once</span></li>
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label">Weak areas given extra time</span></li>
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label">Practice test completed under timed conditions</span></li>
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label">Materials ready (pens, calculator, ID)</span></li>
                    <li><div class="tpl-checkbox"></div><span class="tpl-check-label">Good night's sleep before the exam</span></li>
                </ul>
            </div>

            <div class="tpl-mantra">You've done the work. Trust the preparation.</div>
        </div>`;
    },

    // ─── Cornell Notes ──────────────────────────────────────────
    'cornell-notes': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = formatDate(date);
        const noteLines = isA5 ? 22 : 32;
        const cueLines = isA5 ? 6 : 8;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="cornell-notes">
            <div class="tpl-header">
                <div>
                    <h2>Cornell Notes</h2>
                    <div class="tpl-subtitle">Record. Reduce. Recite. Reflect. Review.</div>
                </div>
                <div class="tpl-date">${dateStr}</div>
            </div>

            <!-- Lecture / Topic Info -->
            <div class="tpl-section">
                <div class="tpl-box" style="padding:0.4rem 0.6rem">
                    <div style="display:flex;gap:1rem;flex-wrap:wrap">
                        <div class="tpl-line-labeled" style="flex:2;min-width:150px"><span class="label">Subject:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="flex:2;min-width:150px"><span class="label">Topic / Lecture:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="flex:1;min-width:70px"><span class="label">Page:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    </div>
                </div>
            </div>

            <!-- Cornell Layout -->
            <div class="tpl-section" style="flex:1">
                <div style="display:flex;gap:0;border:1.5px solid #d5d0c8;border-radius:6px;overflow:hidden">
                    <!-- Cue Column (left, narrow) -->
                    <div style="width:30%;border-right:1.5px solid #d5d0c8;padding:0.5rem;background:rgba(74,128,96,0.03)">
                        <div style="font-size:0.7rem;font-weight:600;color:#4a8060;margin-bottom:0.4rem;text-transform:uppercase;letter-spacing:0.5px">Cues / Questions</div>
                        <div class="tpl-lines-group">
                            ${repeat(cueLines, '<div class="tpl-line" style="min-height:2.5em"></div>')}
                        </div>
                    </div>
                    <!-- Notes Column (right, wide) -->
                    <div style="width:70%;padding:0.5rem">
                        <div style="font-size:0.7rem;font-weight:600;color:#4a8060;margin-bottom:0.4rem;text-transform:uppercase;letter-spacing:0.5px">Notes</div>
                        <div class="tpl-lines-group">
                            ${repeat(noteLines, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Summary Section -->
            <div class="tpl-section">
                <div style="border:1.5px solid #d5d0c8;border-radius:6px;padding:0.5rem;background:rgba(74,128,96,0.03)">
                    <div style="font-size:0.7rem;font-weight:600;color:#4a8060;margin-bottom:0.3rem;text-transform:uppercase;letter-spacing:0.5px">Summary (write within 24 hours)</div>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 3 : 5, '<div class="tpl-line"></div>')}
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">Review your notes within 24 hours for maximum retention.</div>
        </div>`;
    },

    // ─── Spaced Repetition Tracker ──────────────────────────────
    'spaced-repetition': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = formatDate(date);
        const topicCount = isA5 ? 12 : 18;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="spaced-repetition">
            <div class="tpl-header">
                <div>
                    <h2>Spaced Repetition Tracker</h2>
                    <div class="tpl-subtitle">Review at the right time. Remember forever.</div>
                </div>
                <div class="tpl-date">${dateStr}</div>
            </div>

            <div class="tpl-quote-box">
                "Repetition is the mother of learning." — The spacing effect means reviewing at increasing intervals dramatically improves long-term memory.
            </div>

            <!-- Subject Info -->
            <div class="tpl-section">
                <div class="tpl-box" style="padding:0.4rem 0.6rem">
                    <div style="display:flex;gap:1rem;flex-wrap:wrap">
                        <div class="tpl-line-labeled" style="flex:1"><span class="label">Subject:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="flex:1"><span class="label">Start date:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    </div>
                </div>
            </div>

            <!-- Spaced Repetition Grid -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🧠</span> Review Schedule</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th style="width:30px">#</th>
                            <th>Topic / Concept</th>
                            <th style="width:${isA5 ? '38px' : '48px'}">Day 1</th>
                            <th style="width:${isA5 ? '38px' : '48px'}">Day 3</th>
                            <th style="width:${isA5 ? '38px' : '48px'}">Day 7</th>
                            <th style="width:${isA5 ? '38px' : '48px'}">Day 14</th>
                            <th style="width:${isA5 ? '38px' : '48px'}">Day 30</th>
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
                <p style="font-size:0.6rem;color:#999;margin-top:0.2rem">Mark each cell: ✅ Recalled easily | ⚠️ Struggled (review sooner) | ❌ Forgot (restart interval)</p>
            </div>

            ${!isA5 ? `
            <!-- Retention Notes -->
            <div class="tpl-2col">
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">💡</span> Concepts That Keep Slipping</div>
                    <div class="tpl-lines-group">
                        ${repeat(4, '<div class="tpl-line"></div>')}
                    </div>
                </div>
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">🔗</span> Memory Tricks / Mnemonics</div>
                    <div class="tpl-lines-group">
                        ${repeat(4, '<div class="tpl-line"></div>')}
                    </div>
                </div>
            </div>` : ''}

            <!-- Overall Mastery -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🏆</span> Mastery Progress</div>
                <div class="tpl-box">
                    <div style="display:flex;gap:1rem;align-items:center;flex-wrap:wrap">
                        <div class="tpl-line-labeled"><span class="label">Topics mastered:</span><div class="line" style="border-bottom:1px solid #e0ddd8;min-width:40px"></div></div>
                        <div class="tpl-line-labeled"><span class="label">Need more review:</span><div class="line" style="border-bottom:1px solid #e0ddd8;min-width:40px"></div></div>
                        <div class="tpl-line-labeled"><span class="label">Total topics:</span><div class="line" style="border-bottom:1px solid #e0ddd8;min-width:40px"></div></div>
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">Science says: space it out, don't cram. Trust the process.</div>
        </div>`;
    },

    // ─── Weekly Study Timetable ─────────────────────────────────
    'study-timetable': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = formatDate(date);
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const daysShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const slotCount = isA5 ? 5 : 7;

        // Generate time slot rows
        const morningSlots = isA5 ? 3 : 4;
        const afternoonSlots = isA5 ? 2 : 3;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="study-timetable">
            <div class="tpl-header">
                <div>
                    <h2>Weekly Study Timetable</h2>
                    <div class="tpl-subtitle">Structure your week. Study smarter, not harder.</div>
                </div>
                <div style="text-align:right">
                    <div class="tpl-date">Week of ${dateStr}</div>
                </div>
            </div>

            <div class="tpl-quote-box">
                "A goal without a plan is just a wish." — Antoine de Saint-Exupéry
            </div>

            <!-- Weekly Goals -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> This Week's Study Goals</div>
                <div class="${isA5 ? 'tpl-2col' : 'tpl-3col'}">
                    <div class="tpl-box">
                        <div class="tpl-box-title">🔥 Must Do</div>
                        <div class="tpl-lines-group">
                            ${repeat(3, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">📌 Should Do</div>
                        <div class="tpl-lines-group">
                            ${repeat(3, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                    ${!isA5 ? `
                    <div class="tpl-box">
                        <div class="tpl-box-title">💡 Bonus</div>
                        <div class="tpl-lines-group">
                            ${repeat(3, '<div class="tpl-line"></div>')}
                        </div>
                    </div>` : ''}
                </div>
            </div>

            <!-- Timetable Grid -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📅</span> Study Schedule</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th style="width:55px">Time</th>
                            ${days.map((d, i) => `<th>${isA5 ? daysShort[i] : d}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="background:rgba(74,128,96,0.05)">
                            <td colspan="${days.length + 1}" style="font-size:0.65rem;font-weight:600;color:#4a8060;text-align:left;padding:0.2rem 0.4rem">🌅 Morning</td>
                        </tr>
                        ${repeat(morningSlots, (i) => `
                        <tr>
                            <td style="font-size:0.7rem">${6 + i * 2}:00</td>
                            ${repeat(7, '<td></td>')}
                        </tr>`)}
                        <tr style="background:rgba(74,128,96,0.05)">
                            <td colspan="${days.length + 1}" style="font-size:0.65rem;font-weight:600;color:#4a8060;text-align:left;padding:0.2rem 0.4rem">☀️ Afternoon</td>
                        </tr>
                        ${repeat(afternoonSlots, (i) => `
                        <tr>
                            <td style="font-size:0.7rem">${12 + i * 2}:00</td>
                            ${repeat(7, '<td></td>')}
                        </tr>`)}
                        <tr style="background:rgba(74,128,96,0.05)">
                            <td colspan="${days.length + 1}" style="font-size:0.65rem;font-weight:600;color:#4a8060;text-align:left;padding:0.2rem 0.4rem">🌙 Evening</td>
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
                <div class="tpl-section-title"><span class="icon">📊</span> Weekly Summary</div>
                <div class="tpl-box">
                    <div style="display:flex;gap:1rem;flex-wrap:wrap">
                        <div class="tpl-line-labeled"><span class="label">Total study hours:</span><div class="line" style="border-bottom:1px solid #e0ddd8;min-width:40px"></div></div>
                        <div class="tpl-line-labeled"><span class="label">Goals completed:</span><div class="line" style="border-bottom:1px solid #e0ddd8;min-width:30px"></div><span class="label"> / </span><div class="line" style="border-bottom:1px solid #e0ddd8;min-width:30px"></div></div>
                        <div class="tpl-line-labeled"><span class="label">Productivity:</span>
                            <div class="tpl-rating">
                                ${repeat(5, '<div class="tpl-rating-dot"></div>')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">Consistency is what transforms average into excellence.</div>
        </div>`;
    },

    // ─── Assignment Tracker ─────────────────────────────────────
    'assignment-tracker': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = formatDate(date);
        const assignmentCount = isA5 ? 8 : 12;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="assignment-tracker">
            <div class="tpl-header">
                <div>
                    <h2>Assignment Tracker</h2>
                    <div class="tpl-subtitle">Track every deadline. Never miss a submission.</div>
                </div>
                <div style="text-align:right">
                    <div class="tpl-date">${dateStr}</div>
                </div>
            </div>

            <div class="tpl-quote-box">
                "The key is not to prioritize what's on your schedule, but to schedule your priorities." — Stephen Covey
            </div>

            <!-- Term / Semester Info -->
            <div class="tpl-section">
                <div class="tpl-box" style="padding:0.4rem 0.6rem">
                    <div style="display:flex;gap:1rem;flex-wrap:wrap">
                        <div class="tpl-line-labeled" style="flex:1"><span class="label">Semester / Term:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="flex:1"><span class="label">Period:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    </div>
                </div>
            </div>

            <!-- Assignment Grid -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📝</span> Assignments & Deadlines</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th style="width:25px">#</th>
                            <th>Assignment</th>
                            <th style="width:${isA5 ? '60px' : '75px'}">Subject</th>
                            <th style="width:${isA5 ? '55px' : '65px'}">Due Date</th>
                            <th style="width:${isA5 ? '40px' : '50px'}">Priority</th>
                            <th style="width:${isA5 ? '45px' : '55px'}">Status</th>
                            <th style="width:${isA5 ? '35px' : '45px'}">Grade</th>
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
                <p style="font-size:0.6rem;color:#999;margin-top:0.2rem">Priority: 🔴 High, 🟡 Medium, 🟢 Low | Status: ⬜ Not started, 🔄 Working, 📤 Submitted, ✅ Graded</p>
            </div>

            <!-- Upcoming Deadlines -->
            <div class="tpl-${isA5 ? '2col' : '2col'}">
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">🚨</span> This Week's Deadlines</div>
                    <ul class="tpl-checklist">
                        ${repeat(isA5 ? 4 : 5, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                    </ul>
                </div>
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">📌</span> Next Week's Deadlines</div>
                    <ul class="tpl-checklist">
                        ${repeat(isA5 ? 4 : 5, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                    </ul>
                </div>
            </div>

            ${!isA5 ? `
            <!-- Notes -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📋</span> Notes & Reminders</div>
                <div class="tpl-lines-group">
                    ${repeat(3, '<div class="tpl-line"></div>')}
                </div>
            </div>` : ''}

            <!-- Grade Tracker -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📊</span> Grade Summary</div>
                <div class="tpl-box">
                    <div style="display:flex;gap:1rem;flex-wrap:wrap">
                        <div class="tpl-line-labeled"><span class="label">Assignments completed:</span><div class="line" style="border-bottom:1px solid #e0ddd8;min-width:30px"></div><span class="label"> / </span><div class="line" style="border-bottom:1px solid #e0ddd8;min-width:30px"></div></div>
                        <div class="tpl-line-labeled"><span class="label">Average grade:</span><div class="line" style="border-bottom:1px solid #e0ddd8;min-width:40px"></div></div>
                        <div class="tpl-line-labeled"><span class="label">On-time rate:</span><div class="line" style="border-bottom:1px solid #e0ddd8;min-width:40px"></div></div>
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">Start early. Submit on time. Sleep well.</div>
        </div>`;
    },

    // ─── Subject Review Sheet ───────────────────────────────────
    'subject-review': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = formatDate(date);

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="subject-review">
            <div class="tpl-header">
                <div>
                    <h2>Subject Review Sheet</h2>
                    <div class="tpl-subtitle">Deep review. One subject. Total clarity.</div>
                </div>
                <div class="tpl-date">${dateStr}</div>
            </div>

            <!-- Subject Details -->
            <div class="tpl-section">
                <div class="tpl-box" style="padding:0.4rem 0.6rem">
                    <div style="display:flex;gap:1rem;flex-wrap:wrap">
                        <div class="tpl-line-labeled" style="flex:2;min-width:150px"><span class="label">Subject:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="flex:2;min-width:150px"><span class="label">Chapter / Unit:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    </div>
                </div>
            </div>

            <!-- Key Concepts -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">💡</span> Key Concepts & Definitions</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>Concept / Term</th>
                            <th>Definition / Explanation</th>
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
                    <div class="tpl-section-title"><span class="icon">📐</span> Formulas / Rules / Theorems</div>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 5 : 8, '<div class="tpl-line" style="min-height:1.8em"></div>')}
                    </div>
                </div>

                <!-- Common Mistakes -->
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">⚠️</span> Common Mistakes to Avoid</div>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 5 : 8, '<div class="tpl-line" style="min-height:1.8em"></div>')}
                    </div>
                </div>
            </div>

            <!-- Practice Problems -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">✏️</span> Practice Problems & Answers</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th style="width:30px">#</th>
                            <th>Problem / Question</th>
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
                <div class="tpl-section-title"><span class="icon">🔗</span> Connections & Big Picture</div>
                <div class="tpl-box">
                    <div class="tpl-box-title">How does this connect to what I already know?</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.3rem">What's the #1 thing I must remember?</div>
                    <div class="tpl-line"></div>
                </div>
            </div>

            <!-- Mastery -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🏆</span> Mastery Level</div>
                <div class="tpl-box">
                    <div class="tpl-rating">
                        ${repeat(10, '<div class="tpl-rating-dot"></div>')}
                    </div>
                    <span class="tpl-rating-label" style="display:block;text-align:center">Clueless → Expert</span>
                </div>
            </div>

            <div class="tpl-mantra">Understand it. Don't just memorize it.</div>
        </div>`;
    }
};

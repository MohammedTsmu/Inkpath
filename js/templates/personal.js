/* ============================================================
   Inkpath — Personal Growth Templates
   (Journal, Reading, Social, Decision, Emergency)
   ============================================================ */

const PersonalTemplates = {

    // ─── Gratitude & Mood Journal ───────────────────────────────
    'journal': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const weekDates = getWeekDates(date);
        const weekRange = `${formatDateShort(weekDates[0])} — ${formatDateShort(weekDates[6])}`;
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const displayDays = isA5 ? days.slice(0, 5) : days;
        const moods = ['😔', '😕', '😐', '🙂', '😊'];

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="journal">
            <div class="tpl-header">
                <div>
                    <h2>Gratitude & Mood Journal</h2>
                    <div class="tpl-subtitle">Feel it. Write it. Grow from it.</div>
                </div>
                <div class="tpl-date">${weekRange}</div>
            </div>

            <div class="tpl-quote-box">
                "Gratitude turns what we have into enough."
            </div>

            ${displayDays.map((day, i) => `
            <div class="tpl-section" style="page-break-inside:avoid">
                <div class="tpl-section-title"><span class="icon">📖</span> ${isA5 ? day.substring(0, 3) : day} — ${formatDateShort(weekDates[i])}</div>
                <div style="display:flex;gap:0.75rem;align-items:flex-start">
                    <div style="flex:1">
                        <div class="tpl-line-labeled">
                            <span class="label">Grateful for:</span>
                            <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div>
                        </div>
                        <div class="tpl-line-labeled" style="margin-top:0.15rem">
                            <span class="label">Today's win:</span>
                            <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div>
                        </div>
                    </div>
                    <div style="display:flex;gap:3px;align-items:center">
                        <span style="font-size:0.6rem;color:#aaa">Mood:</span>
                        ${moods.map(m => `<span style="font-size:0.7rem;opacity:0.4">${m}</span>`).join('')}
                    </div>
                </div>
            </div>`).join('')}

            <!-- Weekly Reflection -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">💭</span> Weekly Reflection</div>
                <div class="tpl-box">
                    <div class="tpl-box-title">Best moment this week:</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.3rem">Something I learned about myself:</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.3rem">One thing I want to change:</div>
                    <div class="tpl-line"></div>
                </div>
            </div>

            <div class="tpl-mantra">What you focus on grows. Focus on the good.</div>
        </div>`;
    },

    // ─── Reading & Learning Log ─────────────────────────────────
    'reading-log': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const monthName = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        const bookCount = isA5 ? 3 : 4;
        const skillCount = isA5 ? 3 : 5;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="reading-log">
            <div class="tpl-header">
                <div>
                    <h2>Reading & Learning Log</h2>
                    <div class="tpl-subtitle">Feed your mind. Track your growth.</div>
                </div>
                <div class="tpl-date">${monthName}</div>
            </div>

            <!-- Currently Reading -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📚</span> Books This Month</div>
                ${repeat(bookCount, (i) => `
                <div class="tpl-box" style="margin-bottom:0.5rem">
                    <div class="tpl-line-labeled">
                        <span class="label">📖 Title:</span>
                        <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div>
                    </div>
                    <div style="display:flex;gap:0.75rem;margin-top:0.2rem">
                        <div class="tpl-line-labeled">
                            <span class="label">Author:</span>
                            <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em;min-width:50px"></div>
                        </div>
                        <div class="tpl-line-labeled">
                            <span class="label">Pages:</span>
                            <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em;min-width:30px"></div>
                        </div>
                    </div>
                    <div class="tpl-box-title" style="margin-top:0.2rem">Progress:</div>
                    <div class="tpl-progress-bar">
                        ${repeat(10, '<div class="tpl-progress-segment"></div>')}
                    </div>
                    <div class="tpl-box-title" style="margin-top:0.2rem">Key takeaway:</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-line-labeled" style="margin-top:0.2rem">
                        <span class="label">Rating:</span>
                        <div class="tpl-rating">${repeat(5, '<div class="tpl-rating-dot"></div>')}</div>
                    </div>
                </div>`)}
            </div>

            <!-- Skills / Courses -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎓</span> Skills & Courses</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>Skill / Course</th>
                            <th style="width:70px">Progress</th>
                            <th>Key Insight</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(skillCount, '<tr><td class="wide"></td><td></td><td class="wide"></td></tr>')}
                    </tbody>
                </table>
            </div>

            <!-- Reading Goals -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> Learning Goals</div>
                <div class="tpl-lines-group">
                    ${repeat(isA5 ? 2 : 3, '<div class="tpl-line"></div>')}
                </div>
            </div>

            <div class="tpl-mantra">Leaders are readers. What you learn today shapes who you become tomorrow.</div>
        </div>`;
    },

    // ─── Social & Relationships ─────────────────────────────────
    'relationships': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const monthName = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        const contactRows = isA5 ? 6 : 10;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="relationships">
            <div class="tpl-header">
                <div>
                    <h2>Relationships & Social</h2>
                    <div class="tpl-subtitle">Nurture your connections. People matter most.</div>
                </div>
                <div class="tpl-date">${monthName}</div>
            </div>

            <!-- People to Connect With -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">👥</span> People to Reach Out To</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>Person</th>
                            <th style="width:80px">Relationship</th>
                            <th>Action (call, visit, message)</th>
                            <th style="width:55px">By When</th>
                            <th style="width:35px">✓</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(contactRows, '<tr><td class="wide"></td><td></td><td class="wide"></td><td></td><td></td></tr>')}
                    </tbody>
                </table>
            </div>

            <!-- Important Dates -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎂</span> Birthdays & Important Dates This Month</div>
                <div class="${isA5 ? '' : 'tpl-2col'}">
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 3 : 4, '<div class="tpl-line-labeled"><span class="label" style="min-width:30px">__/__</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>')}
                    </div>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 3 : 4, '<div class="tpl-line-labeled"><span class="label" style="min-width:30px">__/__</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>')}
                    </div>
                </div>
            </div>

            <!-- Relationship Goals -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">❤️</span> Relationship Goals This Month</div>
                <ul class="tpl-checklist">
                    ${repeat(isA5 ? 3 : 5, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                </ul>
            </div>

            <!-- Reflection -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">💭</span> Social Reflection</div>
                <div class="tpl-box">
                    <div class="tpl-box-title">Am I investing enough in relationships?</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.3rem">Who energizes me?</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.3rem">Who drains me? (Set boundaries)</div>
                    <div class="tpl-line"></div>
                </div>
            </div>

            <div class="tpl-mantra">The quality of your life = the quality of your relationships.</div>
        </div>`;
    },

    // ─── Decision Maker ─────────────────────────────────────────
    'decision-maker': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = formatDate(date);
        const factorCount = isA5 ? 4 : 6;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="decision-maker">
            <div class="tpl-header">
                <div>
                    <h2>Decision Maker</h2>
                    <div class="tpl-subtitle">Think clearly. Decide wisely. Act boldly.</div>
                </div>
                <div class="tpl-date">${dateStr}</div>
            </div>

            <!-- The Decision -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🤔</span> The Decision</div>
                <div class="tpl-highlight-box">
                    <div class="tpl-line" style="border-color:#d4c48a;min-height:1.8em"></div>
                </div>
            </div>

            <!-- Deadline -->
            <div class="tpl-section">
                <div class="tpl-line-labeled">
                    <span class="label">Decision needed by:</span>
                    <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em;max-width:150px"></div>
                </div>
            </div>

            <!-- Pros vs Cons -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">⚖️</span> Pros vs Cons</div>
                <div class="tpl-2col">
                    <div class="tpl-box" style="border-color:#27ae60">
                        <div class="tpl-box-title" style="color:#27ae60">✅ Pros (Reasons FOR)</div>
                        <div class="tpl-lines-group">
                            ${repeat(isA5 ? 4 : 6, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                    <div class="tpl-box" style="border-color:#c0392b">
                        <div class="tpl-box-title" style="color:#c0392b">❌ Cons (Reasons AGAINST)</div>
                        <div class="tpl-lines-group">
                            ${repeat(isA5 ? 4 : 6, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Weighted Decision Matrix -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📊</span> Weighted Decision Matrix</div>
                <p style="font-size:0.65rem;color:#999;margin-bottom:0.3rem">Rate each factor 1–10. Weight each by importance (1–5). Score = Rating × Weight.</p>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>Factor</th>
                            <th style="width:55px">Weight</th>
                            <th style="width:70px">Option A</th>
                            <th style="width:70px">Option B</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(factorCount, '<tr><td class="wide"></td><td></td><td></td><td></td></tr>')}
                        <tr style="font-weight:700;background:#f8f7f4">
                            <td style="text-align:right">TOTAL SCORE</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Important Questions -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">💡</span> Key Questions</div>
                <div class="tpl-box">
                    <div class="tpl-box-title">What would I choose if fear wasn't a factor?</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.3rem">In 5 years, which choice will I regret NOT making?</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.3rem">What's the worst thing that could happen? Can I live with it?</div>
                    <div class="tpl-line"></div>
                </div>
            </div>

            <!-- My Decision -->
            <div class="tpl-section">
                <div class="tpl-highlight-box">
                    <div class="tpl-box-title" style="text-align:center">✅ MY DECISION</div>
                    <div class="tpl-line" style="border-color:#d4c48a;min-height:1.5em"></div>
                    <div class="tpl-box-title" style="margin-top:0.3rem;text-align:center">First action step:</div>
                    <div class="tpl-line" style="border-color:#d4c48a"></div>
                </div>
            </div>

            <div class="tpl-mantra">Indecision is a decision — to stay stuck. Choose and move.</div>
        </div>`;
    },

    // ─── Emergency Reference Sheet ──────────────────────────────
    'emergency-ref': function (date, paperSize) {
        const isA5 = paperSize === 'a5';

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="emergency-ref">
            <div class="tpl-header">
                <div>
                    <h2>Emergency Reference</h2>
                    <div class="tpl-subtitle">Everything important, in one place, offline.</div>
                </div>
            </div>

            <!-- Personal Info -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">👤</span> Personal Information</div>
                <div class="tpl-box">
                    <div class="tpl-line-labeled"><span class="label">Full name:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">Date of birth:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">Blood type:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">Allergies:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">Medications:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">Medical conditions:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                </div>
            </div>

            <!-- Emergency Contacts -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📞</span> Emergency Contacts</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Relationship</th>
                            <th>Phone</th>
                            <th>Alt Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(isA5 ? 4 : 6, '<tr><td class="wide"></td><td></td><td></td><td></td></tr>')}
                    </tbody>
                </table>
            </div>

            <!-- Important Numbers -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🏥</span> Important Numbers & Addresses</div>
                <div class="${isA5 ? '' : 'tpl-2col'}">
                    <div class="tpl-box">
                        <div class="tpl-line-labeled"><span class="label">Doctor:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">Dentist:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">Hospital:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">Pharmacy:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-line-labeled"><span class="label">Insurance #:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">ID / Passport:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">Bank:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">Landlord:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    </div>
                </div>
            </div>

            <!-- Important Accounts (offline reference) -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🔑</span> Key Accounts (for offline reference)</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>Service / Account</th>
                            <th>Username / Email</th>
                            <th>Hint / Recovery</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(isA5 ? 5 : 8, '<tr><td class="wide"></td><td class="wide"></td><td class="wide"></td></tr>')}
                    </tbody>
                </table>
            </div>

            <!-- Home Info -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🏠</span> Home Info</div>
                <div class="tpl-box">
                    <div class="tpl-line-labeled"><span class="label">Address:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">WiFi name:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">WiFi password:</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                </div>
            </div>

            <div class="tpl-mantra">Keep this sheet safe. Update it regularly. It's your offline lifeline.</div>
        </div>`;
    }
};

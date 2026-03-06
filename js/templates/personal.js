/* ============================================================
   Inkpath — Personal Growth Templates
   (Journal, Reading, Social, Decision, Emergency)
   ============================================================ */

const PersonalTemplates = {

    // ─── Gratitude & Mood Journal ───────────────────────────────
    'journal': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dir = I18N.getDir();
        const weekDates = getWeekDates(date);
        const weekRange = `${I18N.formatDateShort(weekDates[0])} — ${I18N.formatDateShort(weekDates[6])}`;
        const days = [t('day.monday'), t('day.tuesday'), t('day.wednesday'), t('day.thursday'), t('day.friday'), t('day.saturday'), t('day.sunday')];
        const displayDays = isA5 ? days.slice(0, 5) : days;
        const moods = ['😔', '😕', '😐', '🙂', '😊'];

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${dir}" id="journal">
            <div class="tpl-header">
                <div>
                    <h2>${t('journal.title')}</h2>
                    <div class="tpl-subtitle">${t('journal.subtitle')}</div>
                </div>
                <div class="tpl-date">${weekRange}</div>
            </div>

            <div class="tpl-quote-box">
                ${t('journal.quote')}
            </div>

            ${displayDays.map((day, i) => `
            <div class="tpl-section" style="page-break-inside:avoid">
                <div class="tpl-section-title"><span class="icon">📖</span> ${isA5 ? day.substring(0, 3) : day} — ${I18N.formatDateShort(weekDates[i])}</div>
                <div style="display:flex;gap:0.75rem;align-items:flex-start">
                    <div style="flex:1">
                        <div class="tpl-line-labeled">
                            <span class="label">${t('journal.grateful')}</span>
                            <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div>
                        </div>
                        <div class="tpl-line-labeled" style="margin-top:0.15rem">
                            <span class="label">${t('journal.todayFocus')}</span>
                            <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div>
                        </div>
                    </div>
                    <div style="display:flex;gap:3px;align-items:center">
                        <span style="font-size:0.6rem;color:#aaa">${t('journal.mood')}</span>
                        ${moods.map(m => `<span style="font-size:0.7rem;opacity:0.4">${m}</span>`).join('')}
                    </div>
                </div>
            </div>`).join('')}

            <!-- Weekly Reflection -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">💭</span> ${t('journal.thoughts')}</div>
                <div class="tpl-box">
                    <div class="tpl-box-title">${t('journal.highlight')}</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.3rem">${t('journal.learned')}</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.3rem">${t('journal.moodScale')}</div>
                    <div class="tpl-line"></div>
                </div>
            </div>

            <div class="tpl-mantra">${t('journal.mantra')}</div>
        </div>`;
    },

    // ─── Reading & Learning Log ─────────────────────────────────
    'reading-log': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dir = I18N.getDir();
        const monthName = I18N.getMonthName(date);
        const bookCount = isA5 ? 3 : 4;
        const skillCount = isA5 ? 3 : 5;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${dir}" id="reading-log">
            <div class="tpl-header">
                <div>
                    <h2>${t('reading.title')}</h2>
                    <div class="tpl-subtitle">${t('reading.subtitle')}</div>
                </div>
                <div class="tpl-date">${monthName}</div>
            </div>

            <!-- Currently Reading -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📚</span> ${t('reading.monthlyList')}</div>
                ${repeat(bookCount, (i) => `
                <div class="tpl-box" style="margin-bottom:0.5rem">
                    <div class="tpl-line-labeled">
                        <span class="label">📖 ${t('reading.bookName')}</span>
                        <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div>
                    </div>
                    <div style="display:flex;gap:0.75rem;margin-top:0.2rem">
                        <div class="tpl-line-labeled">
                            <span class="label">${t('reading.author')}</span>
                            <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em;min-width:50px"></div>
                        </div>
                        <div class="tpl-line-labeled">
                            <span class="label">${t('reading.pages')}</span>
                            <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em;min-width:30px"></div>
                        </div>
                    </div>
                    <div class="tpl-box-title" style="margin-top:0.2rem">${t('reading.status')}</div>
                    <div class="tpl-progress-bar">
                        ${repeat(10, '<div class="tpl-progress-segment"></div>')}
                    </div>
                    <div class="tpl-box-title" style="margin-top:0.2rem">${t('reading.keyInsights')}</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-line-labeled" style="margin-top:0.2rem">
                        <span class="label">${t('reading.rating')}</span>
                        <div class="tpl-rating">${repeat(5, '<div class="tpl-rating-dot"></div>')}</div>
                    </div>
                </div>`)}
            </div>

            <!-- Skills / Courses -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎓</span> ${t('reading.book')}</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>${t('reading.book')}</th>
                            <th style="width:70px">${t('reading.status')}</th>
                            <th>${t('reading.keyInsights')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(skillCount, '<tr><td class="wide"></td><td></td><td class="wide"></td></tr>')}
                    </tbody>
                </table>
            </div>

            <!-- Reading Goals -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> ${t('reading.howApply')}</div>
                <div class="tpl-lines-group">
                    ${repeat(isA5 ? 2 : 3, '<div class="tpl-line"></div>')}
                </div>
            </div>

            <div class="tpl-mantra">${t('reading.mantra')}</div>
        </div>`;
    },

    // ─── Social & Relationships ─────────────────────────────────
    'relationships': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dir = I18N.getDir();
        const monthName = I18N.getMonthName(date);
        const contactRows = isA5 ? 6 : 10;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${dir}" id="relationships">
            <div class="tpl-header">
                <div>
                    <h2>${t('rel.title')}</h2>
                    <div class="tpl-subtitle">${t('rel.subtitle')}</div>
                </div>
                <div class="tpl-date">${monthName}</div>
            </div>

            <!-- People to Connect With -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">👥</span> ${t('rel.reach')}</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>${t('rel.person')}</th>
                            <th style="width:80px">${t('rel.relationship')}</th>
                            <th>${t('rel.nextAction')}</th>
                            <th style="width:55px">${t('rel.lastContact')}</th>
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
                <div class="tpl-section-title"><span class="icon">🎂</span> ${t('rel.birthday')}</div>
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
                <div class="tpl-section-title"><span class="icon">❤️</span> ${t('rel.monthlyGoals')}</div>
                <ul class="tpl-checklist">
                    ${repeat(isA5 ? 3 : 5, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                </ul>
            </div>

            <!-- Reflection -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">💭</span> ${t('rel.gratitude')}</div>
                <div class="tpl-box">
                    <div class="tpl-box-title">${t('rel.deepen')}</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.3rem">${t('rel.newConnection')}</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.3rem">${t('rel.boundaries')}</div>
                    <div class="tpl-line"></div>
                </div>
            </div>

            <div class="tpl-mantra">${t('rel.mantra')}</div>
        </div>`;
    },

    // ─── Decision Maker ─────────────────────────────────────────
    'decision-maker': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dir = I18N.getDir();
        const dateStr = I18N.formatDate(date);
        const factorCount = isA5 ? 4 : 6;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${dir}" id="decision-maker">
            <div class="tpl-header">
                <div>
                    <h2>${t('decision.title')}</h2>
                    <div class="tpl-subtitle">${t('decision.subtitle')}</div>
                </div>
                <div class="tpl-date">${dateStr}</div>
            </div>

            <!-- The Decision -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🤔</span> ${t('decision.what')}</div>
                <div class="tpl-highlight-box">
                    <div class="tpl-line" style="border-color:#d4c48a;min-height:1.8em"></div>
                </div>
            </div>

            <!-- Deadline -->
            <div class="tpl-section">
                <div class="tpl-line-labeled">
                    <span class="label">${t('decision.deadline2')}</span>
                    <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em;max-width:150px"></div>
                </div>
            </div>

            <!-- Pros vs Cons -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">⚖️</span> ${t('decision.options')}</div>
                <div class="tpl-2col">
                    <div class="tpl-box" style="border-color:#27ae60">
                        <div class="tpl-box-title" style="color:#27ae60">${t('decision.pros')}</div>
                        <div class="tpl-lines-group">
                            ${repeat(isA5 ? 4 : 6, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                    <div class="tpl-box" style="border-color:#c0392b">
                        <div class="tpl-box-title" style="color:#c0392b">${t('decision.cons')}</div>
                        <div class="tpl-lines-group">
                            ${repeat(isA5 ? 4 : 6, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Weighted Decision Matrix -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📊</span> ${t('decision.matrix')}</div>
                <p style="font-size:0.65rem;color:#999;margin-bottom:0.3rem">${t('decision.matrixHint')}</p>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>${t('decision.factor')}</th>
                            <th style="width:55px">${t('decision.weight')}</th>
                            <th style="width:70px">${t('decision.option')} A</th>
                            <th style="width:70px">${t('decision.option')} B</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(factorCount, '<tr><td class="wide"></td><td></td><td></td><td></td></tr>')}
                        <tr style="font-weight:700;background:#f8f7f4">
                            <td style="text-align:right">${t('decision.totalScore')}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Important Questions -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">💡</span> ${t('decision.bestCase')}</div>
                <div class="tpl-box">
                    <div class="tpl-box-title">${t('decision.gut')}</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.3rem">${t('decision.values')}</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.3rem">${t('decision.worstCase')}</div>
                    <div class="tpl-line"></div>
                </div>
            </div>

            <!-- My Decision -->
            <div class="tpl-section">
                <div class="tpl-highlight-box">
                    <div class="tpl-box-title" style="text-align:center">${t('decision.chosen')}</div>
                    <div class="tpl-line" style="border-color:#d4c48a;min-height:1.5em"></div>
                    <div class="tpl-box-title" style="margin-top:0.3rem;text-align:center">${t('decision.nextSteps')}</div>
                    <div class="tpl-line" style="border-color:#d4c48a"></div>
                </div>
            </div>

            <div class="tpl-mantra">${t('decision.mantra')}</div>
        </div>`;
    },

    // ─── Emergency Reference Sheet ──────────────────────────────
    'emergency-ref': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dir = I18N.getDir();

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${dir}" id="emergency-ref">
            <div class="tpl-header">
                <div>
                    <h2>${t('emergency.title')}</h2>
                    <div class="tpl-subtitle">${t('emergency.subtitle')}</div>
                </div>
            </div>

            <!-- Personal Info -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">👤</span> ${t('emergency.personal')}</div>
                <div class="tpl-box">
                    <div class="tpl-line-labeled"><span class="label">${t('emergency.name')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">${t('emergency.dob')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">${t('emergency.blood')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">${t('emergency.allergies')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">${t('emergency.medications')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">${t('emergency.conditions')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                </div>
            </div>

            <!-- Emergency Contacts -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📞</span> ${t('emergency.contacts')}</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>${t('emergency.contact')}</th>
                            <th>${t('emergency.relation')}</th>
                            <th>${t('emergency.phone')}</th>
                            <th>${t('emergency.number')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(isA5 ? 4 : 6, '<tr><td class="wide"></td><td></td><td></td><td></td></tr>')}
                    </tbody>
                </table>
            </div>

            <!-- Important Numbers -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🏥</span> ${t('emergency.importantNumbers')}</div>
                <div class="${isA5 ? '' : 'tpl-2col'}">
                    <div class="tpl-box">
                        <div class="tpl-line-labeled"><span class="label">${t('emergency.provider')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">${t('emergency.dentist')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">${t('emergency.hospital')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">${t('emergency.pharmacy')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-line-labeled"><span class="label">${t('emergency.insurance')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">${t('emergency.policy')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">${t('emergency.bank')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                        <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">${t('emergency.landlord')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    </div>
                </div>
            </div>

            <!-- Important Accounts (offline reference) -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🔑</span> ${t('emergency.keyAccounts')}</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>${t('emergency.service')}</th>
                            <th>${t('emergency.username')}</th>
                            <th>${t('emergency.recovery')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(isA5 ? 5 : 8, '<tr><td class="wide"></td><td class="wide"></td><td class="wide"></td></tr>')}
                    </tbody>
                </table>
            </div>

            <!-- Home Info -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🏠</span> ${t('emergency.notes')}</div>
                <div class="tpl-box">
                    <div class="tpl-line-labeled"><span class="label">${t('emergency.address')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">${t('emergency.wifi')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                    <div class="tpl-line-labeled" style="margin-top:0.2rem"><span class="label">${t('emergency.wifiPass')}</span><div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div></div>
                </div>
            </div>

            <div class="tpl-mantra">${t('emergency.mantra')}</div>
        </div>`;
    }
};

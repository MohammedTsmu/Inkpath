/* ============================================================
   Inkpath — Yearly & Vision Templates
   ============================================================ */

const YearlyTemplates = {

    // ─── Annual Vision Board ────────────────────────────────────
    'yearly-vision': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const year = date.getFullYear();

        const lifeAreas = [
            { icon: '💼', name: t('yearly.career'), q: t('yearly.careerQ') },
            { icon: '💰', name: t('yearly.finances'), q: t('yearly.financesQ') },
            { icon: '💪', name: t('yearly.healthFitness'), q: t('yearly.healthQ') },
            { icon: '🧠', name: t('yearly.personalGrowth'), q: t('yearly.growthQ') },
            { icon: '❤️', name: t('yearly.relationships'), q: t('yearly.relQ') },
            { icon: '🎨', name: t('yearly.hobbies'), q: t('yearly.hobbiesQ') }
        ];

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="yearly-vision" dir="${I18N.getDir()}">
            <div class="tpl-header">
                <div>
                    <h2>${year} ${t('yearly.title')}</h2>
                    <div class="tpl-subtitle">${t('yearly.subtitle')}</div>
                </div>
                <div class="tpl-date">${year}</div>
            </div>

            <div class="tpl-quote-box">
                ${t('yearly.quote')}
            </div>

            <!-- Life Theme -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🌟</span> ${t('yearly.themeWord')} ${year}</div>
                <div class="tpl-highlight-box">
                    <div class="tpl-line" style="border-color:#d4c48a;min-height:2em;text-align:center"></div>
                </div>
            </div>

            <!-- Life Areas Assessment -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> ${t('yearly.lifeAreas')}</div>
                <div class="${isA5 ? '' : 'tpl-2col'}">
                    ${(isA5 ? lifeAreas.slice(0, 4) : lifeAreas).map(a => `
                    <div class="tpl-box" style="margin-bottom:0.5rem">
                        <div class="tpl-box-title">${a.icon} ${a.name}</div>
                        <div style="font-size:0.65rem;color:#aaa;margin-bottom:0.2rem">${a.q}</div>
                        <div class="tpl-line"></div>
                        ${isA5 ? '' : '<div class="tpl-line"></div>'}
                        <div class="tpl-line-labeled" style="margin-top:0.2rem">
                            <span class="label">${t('yearly.current')}</span>
                            <div class="tpl-rating">${repeat(10, '<div class="tpl-rating-dot"></div>')}</div>
                        </div>
                        <div class="tpl-line-labeled" style="margin-top:0.15rem">
                            <span class="label">${t('yearly.target')}</span>
                            <div class="tpl-rating">${repeat(10, '<div class="tpl-rating-dot"></div>')}</div>
                        </div>
                    </div>`).join('')}
                </div>
            </div>

            <!-- Big 5 Goals -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🏆</span> ${t('yearly.bigGoals')} ${year} (${isA5 ? 3 : 5})</div>
                <ul class="tpl-checklist">
                    ${repeat(isA5 ? 3 : 5, (i) => `<li><span class="tpl-priority ${i < 2 ? 'high' : i < 4 ? 'medium' : 'low'}">${i + 1}</span><div class="tpl-check-line"></div></li>`)}
                </ul>
            </div>

            <!-- Habits to Build / Break -->
            <div class="${isA5 ? '' : 'tpl-2col'}">
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">✅</span> ${t('yearly.habitsBuild')}</div>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                    </div>
                </div>
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">🚫</span> ${t('yearly.habitsBreak')}</div>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">${t('yearly.mantra')}</div>
        </div>`;
    },

    // ─── Quarterly Planner ──────────────────────────────────────
    'quarterly-planner': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const month = date.getMonth();
        const quarter = Math.floor(month / 3) + 1;
        const year = date.getFullYear();
        const quarterNames = ['', t('quarterly.q1'), t('quarterly.q2'), t('quarterly.q3'), t('quarterly.q4')];
        const quarterMonths = [
            [],
            [t('month.jan'), t('month.feb'), t('month.mar')],
            [t('month.apr'), t('month.may'), t('month.jun')],
            [t('month.jul'), t('month.aug'), t('month.sep')],
            [t('month.oct'), t('month.nov'), t('month.dec')]
        ];

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="quarterly-planner" dir="${I18N.getDir()}">
            <div class="tpl-header">
                <div>
                    <h2>${t('quarterly.title')}</h2>
                    <div class="tpl-subtitle">${t('quarterly.subtitle')}</div>
                </div>
                <div class="tpl-date">${quarterNames[quarter]} ${year}</div>
            </div>

            <!-- Quarter Focus -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> ${t('quarterly.focusTheme')}</div>
                <div class="tpl-highlight-box">
                    <div class="tpl-line" style="border-color:#d4c48a"></div>
                </div>
            </div>

            <!-- 3 Big Quarterly Goals -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🏆</span> ${t('quarterly.goals3')}</div>
                ${repeat(3, (i) => `
                <div class="tpl-box" style="margin-bottom:0.5rem">
                    <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.3rem">
                        <span class="tpl-priority ${i === 0 ? 'high' : i === 1 ? 'medium' : 'low'}">${i + 1}</span>
                        <div style="flex:1;border-bottom:1px solid #e0ddd8;min-height:1.2em"></div>
                    </div>
                    <div class="tpl-box-title">${t('quarterly.successLooks')}</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.2rem">${t('quarterly.keyMilestones')}</div>
                    <ul class="tpl-checklist">
                        ${repeat(3, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                    </ul>
                </div>`)}
            </div>

            <!-- Monthly Breakdown -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📅</span> ${t('quarterly.monthlyBreakdown')}</div>
                <div class="tpl-3col">
                    ${quarterMonths[quarter].map(m => `
                    <div class="tpl-box">
                        <div class="tpl-box-title">${m}</div>
                        <div class="tpl-lines-group">
                            ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                        </div>
                    </div>`).join('')}
                </div>
            </div>

            <!-- Potential Obstacles -->
            <div class="${isA5 ? '' : 'tpl-2col'}">
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">⚠️</span> ${t('quarterly.obstacles')}</div>
                    <div class="tpl-lines-group">
                        ${repeat(3, '<div class="tpl-line"></div>')}
                    </div>
                </div>
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">💡</span> ${t('quarterly.solutions')}</div>
                    <div class="tpl-lines-group">
                        ${repeat(3, '<div class="tpl-line"></div>')}
                    </div>
                </div>
            </div>

            <!-- Quarter Reward -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎁</span> ${t('quarterly.reward')}</div>
                <div class="tpl-line"></div>
            </div>

            <div class="tpl-mantra">${t('quarterly.mantra')}</div>
        </div>`;
    }
};

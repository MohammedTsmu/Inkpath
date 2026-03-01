/* ============================================================
   Inkpath — Yearly & Vision Templates
   ============================================================ */

const YearlyTemplates = {

    // ─── Annual Vision Board ────────────────────────────────────
    'yearly-vision': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const year = date.getFullYear();

        const lifeAreas = [
            { icon: '💼', name: 'Career / Work', q: 'Where do I want to be professionally?' },
            { icon: '💰', name: 'Finances', q: 'What financial milestone to hit?' },
            { icon: '💪', name: 'Health & Fitness', q: 'How do I want to feel physically?' },
            { icon: '🧠', name: 'Personal Growth', q: 'What skills/knowledge to gain?' },
            { icon: '❤️', name: 'Relationships', q: 'How to strengthen connections?' },
            { icon: '🎨', name: 'Hobbies & Fun', q: 'What brings me joy?' }
        ];

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="yearly-vision">
            <div class="tpl-header">
                <div>
                    <h2>${year} Annual Vision</h2>
                    <div class="tpl-subtitle">Dream big. Plan smart. Act daily.</div>
                </div>
                <div class="tpl-date">${year}</div>
            </div>

            <div class="tpl-quote-box">
                "A year from now, you will wish you had started today." — Karen Lamb
            </div>

            <!-- Life Theme -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🌟</span> My Word / Theme for ${year}</div>
                <div class="tpl-highlight-box">
                    <div class="tpl-line" style="border-color:#d4c48a;min-height:2em;text-align:center"></div>
                </div>
            </div>

            <!-- Life Areas Assessment -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> Life Areas — Where I Want to Grow</div>
                <div class="${isA5 ? '' : 'tpl-2col'}">
                    ${(isA5 ? lifeAreas.slice(0, 4) : lifeAreas).map(a => `
                    <div class="tpl-box" style="margin-bottom:0.5rem">
                        <div class="tpl-box-title">${a.icon} ${a.name}</div>
                        <div style="font-size:0.65rem;color:#aaa;margin-bottom:0.2rem">${a.q}</div>
                        <div class="tpl-line"></div>
                        ${isA5 ? '' : '<div class="tpl-line"></div>'}
                        <div class="tpl-line-labeled" style="margin-top:0.2rem">
                            <span class="label">Current (1-10):</span>
                            <div class="tpl-rating">${repeat(10, '<div class="tpl-rating-dot"></div>')}</div>
                        </div>
                        <div class="tpl-line-labeled" style="margin-top:0.15rem">
                            <span class="label">Target (1-10):</span>
                            <div class="tpl-rating">${repeat(10, '<div class="tpl-rating-dot"></div>')}</div>
                        </div>
                    </div>`).join('')}
                </div>
            </div>

            <!-- Big 5 Goals -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🏆</span> My Big ${isA5 ? 3 : 5} Goals for ${year}</div>
                <ul class="tpl-checklist">
                    ${repeat(isA5 ? 3 : 5, (i) => `<li><span class="tpl-priority ${i < 2 ? 'high' : i < 4 ? 'medium' : 'low'}">${i + 1}</span><div class="tpl-check-line"></div></li>`)}
                </ul>
            </div>

            <!-- Habits to Build / Break -->
            <div class="${isA5 ? '' : 'tpl-2col'}">
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">✅</span> Habits to Build</div>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                    </div>
                </div>
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">🚫</span> Habits to Break</div>
                    <div class="tpl-lines-group">
                        ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">This is your year. Make it count.</div>
        </div>`;
    },

    // ─── Quarterly Planner ──────────────────────────────────────
    'quarterly-planner': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const month = date.getMonth();
        const quarter = Math.floor(month / 3) + 1;
        const year = date.getFullYear();
        const quarterNames = ['', 'Q1 (Jan–Mar)', 'Q2 (Apr–Jun)', 'Q3 (Jul–Sep)', 'Q4 (Oct–Dec)'];
        const quarterMonths = [
            [], ['January', 'February', 'March'], ['April', 'May', 'June'],
            ['July', 'August', 'September'], ['October', 'November', 'December']
        ];

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="quarterly-planner">
            <div class="tpl-header">
                <div>
                    <h2>Quarterly Planner</h2>
                    <div class="tpl-subtitle">90 days of focused progress.</div>
                </div>
                <div class="tpl-date">${quarterNames[quarter]} ${year}</div>
            </div>

            <!-- Quarter Focus -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> Quarter Focus / Theme</div>
                <div class="tpl-highlight-box">
                    <div class="tpl-line" style="border-color:#d4c48a"></div>
                </div>
            </div>

            <!-- 3 Big Quarterly Goals -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🏆</span> 3 Quarter Goals</div>
                ${repeat(3, (i) => `
                <div class="tpl-box" style="margin-bottom:0.5rem">
                    <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.3rem">
                        <span class="tpl-priority ${i === 0 ? 'high' : i === 1 ? 'medium' : 'low'}">${i + 1}</span>
                        <div style="flex:1;border-bottom:1px solid #e0ddd8;min-height:1.2em"></div>
                    </div>
                    <div class="tpl-box-title">Success looks like:</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.2rem">Key milestones:</div>
                    <ul class="tpl-checklist">
                        ${repeat(3, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                    </ul>
                </div>`)}
            </div>

            <!-- Monthly Breakdown -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📅</span> Monthly Breakdown</div>
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
                    <div class="tpl-section-title"><span class="icon">⚠️</span> Potential Obstacles</div>
                    <div class="tpl-lines-group">
                        ${repeat(3, '<div class="tpl-line"></div>')}
                    </div>
                </div>
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">💡</span> Solutions / Strategies</div>
                    <div class="tpl-lines-group">
                        ${repeat(3, '<div class="tpl-line"></div>')}
                    </div>
                </div>
            </div>

            <!-- Quarter Reward -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎁</span> My Reward for Completing This Quarter</div>
                <div class="tpl-line"></div>
            </div>

            <div class="tpl-mantra">90 days. 3 goals. No excuses.</div>
        </div>`;
    }
};

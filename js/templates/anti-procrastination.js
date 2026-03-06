/* ============================================================
   Inkpath — Anti-Procrastination Templates
   ============================================================ */

const AntiProcrastinationTemplates = {

    // ─── Procrastination Buster ─────────────────────────────────
    'procrastination-buster': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = I18N.formatDate(date);

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${I18N.getDir()}" id="procrastination-buster">
            <div class="tpl-header">
                <div>
                    <h2>${t('procrastination.title')}</h2>
                    <div class="tpl-subtitle">${t('procrastination.subtitle')}</div>
                </div>
                <div class="tpl-date">${dateStr}</div>
            </div>

            <div class="tpl-quote-box">
                "${t('procrastination.quote')}"
            </div>

            <!-- Eisenhower Matrix -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📊</span> ${t('procrastination.priorityMatrix')}</div>
                <div class="tpl-matrix">
                    <div class="tpl-matrix-cell urgent-important">
                        <div class="tpl-matrix-label" style="color:#c0392b">⚡ ${t('procrastination.doNow')}</div>
                        <div class="tpl-lines-group">
                            ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                    <div class="tpl-matrix-cell not-urgent-important">
                        <div class="tpl-matrix-label" style="color:#e67e22">📅 ${t('procrastination.scheduleIt')}</div>
                        <div class="tpl-lines-group">
                            ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                    <div class="tpl-matrix-cell urgent-not-important">
                        <div class="tpl-matrix-label" style="color:#3498db">👋 ${t('procrastination.delegateIt')}</div>
                        <div class="tpl-lines-group">
                            ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                    <div class="tpl-matrix-cell not-urgent-not-important">
                        <div class="tpl-matrix-label" style="color:#95a5a6">🗑️ ${t('procrastination.dropIt')}</div>
                        <div class="tpl-lines-group">
                            ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Task Breakdown -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🔨</span> ${t('procrastination.breakDown')}</div>
                <div class="${isA5 ? '' : 'tpl-2col'}">
                    ${repeat(2, `
                    <div class="tpl-box" style="margin-bottom:0.5rem">
                        <div class="tpl-box-title">${t('procrastination.task')}:</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-box-title" style="margin-top:0.3rem">${t('procrastination.avoidBecause')}:</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-box-title" style="margin-top:0.3rem">${t('procrastination.breakIntoSteps')}:</div>
                        <ul class="tpl-checklist">
                            ${repeat(4, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                        </ul>
                        <div class="tpl-box-title" style="margin-top:0.3rem">${t('procrastination.reward')}:</div>
                        <div class="tpl-line"></div>
                    </div>`)}
                </div>
            </div>

            <!-- Time Traps -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">⏳</span> ${t('procrastination.timeTraps')}</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>${t('procrastination.timeTrap')}</th>
                            <th style="width:70px">${t('procrastination.timeLost')}</th>
                            <th>${t('procrastination.trigger')}</th>
                            <th>${t('procrastination.counterAction')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="wide" style="color:#ccc">${t('procrastination.egYouTube')}</td>
                            <td style="color:#ccc">${t('procrastination.eg2hrs')}</td>
                            <td class="wide" style="color:#ccc">${t('procrastination.egBoredom')}</td>
                            <td class="wide" style="color:#ccc">${t('procrastination.egReadBook')}</td>
                        </tr>
                        ${repeat(isA5 ? 3 : 4, '<tr><td class="wide"></td><td></td><td class="wide"></td><td class="wide"></td></tr>')}
                    </tbody>
                </table>
            </div>

            <!-- Commitment -->
            <div class="tpl-section">
                <div class="tpl-highlight-box">
                    <div class="tpl-box-title" style="text-align:center">⚡ ${t('procrastination.commitmentNow')}</div>
                    <div style="text-align:center;font-size:0.8rem;color:#666;margin-bottom:0.3rem">
                        ${t('procrastination.startTiny')}
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">${t('procrastination.mantra')}</div>
        </div>`;
    },

    // ─── Accountability Sheet ───────────────────────────────────
    'accountability-sheet': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = I18N.formatDate(date);
        const dayName = I18N.getDayName(date);

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${I18N.getDir()}" id="accountability-sheet">
            <div class="tpl-header">
                <div>
                    <h2>${t('accountability.title')}</h2>
                    <div class="tpl-subtitle">${t('accountability.subtitle')}</div>
                </div>
                <div style="text-align:right">
                    <div class="tpl-date">${dayName}</div>
                    <div class="tpl-date">${dateStr}</div>
                </div>
            </div>

            <!-- Morning Commitment -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🌅</span> ${t('accountability.morningCommitment')}</div>
                <div class="tpl-highlight-box">
                    <div class="tpl-box-title">${t('accountability.todayGoal')}:</div>
                    <ul class="tpl-checklist">
                        ${repeat(3, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                    </ul>
                    <div class="tpl-box-title" style="margin-top:0.3rem">${t('accountability.todayNot')}:</div>
                    <ul class="tpl-checklist">
                        ${repeat(3, '<li><div class="tpl-checkbox round"></div><div class="tpl-check-line"></div></li>')}
                    </ul>
                </div>
            </div>

            <!-- Hourly Check-in -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">⏰</span> ${t('accountability.hourlyLog')}</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th style="width:55px">${t('accountability.time')}</th>
                            <th>${t('accountability.actual')}</th>
                            <th style="width:${isA5 ? '50px' : '70px'}">${t('accountability.productive')}?</th>
                            <th style="width:${isA5 ? '40px' : '60px'}">${t('accountability.screen')}?</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${generateAccountabilityRows(isA5 ? 8 : 6, isA5 ? 19 : 22)}
                    </tbody>
                </table>
            </div>

            <!-- Day Score -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📊</span> ${t('accountability.score')}</div>
                <div class="${isA5 ? '' : 'tpl-2col'}">
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('accountability.commitmentsKept')}: ____ / ____</div>
                        <div class="tpl-progress-bar" style="margin-top:0.3rem">
                            ${repeat(10, '<div class="tpl-progress-segment"></div>')}
                        </div>
                        <div class="tpl-box-title" style="margin-top:0.5rem">${t('accountability.totalProductiveHours')}:</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-box-title" style="margin-top:0.3rem">${t('accountability.totalScreenHours')}:</div>
                        <div class="tpl-line"></div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('accountability.honestyCheck')}:</div>
                        <ul class="tpl-checklist">
                            <li><div class="tpl-checkbox"></div><span class="tpl-check-label">${t('accountability.stickToTimeBlocks')}?</span></li>
                            <li><div class="tpl-checkbox"></div><span class="tpl-check-label">${t('accountability.avoidTimeWasters')}?</span></li>
                            <li><div class="tpl-checkbox"></div><span class="tpl-check-label">${t('accountability.completePriority')}?</span></li>
                            <li><div class="tpl-checkbox"></div><span class="tpl-check-label">${t('accountability.stayOffScreens')}?</span></li>
                            <li><div class="tpl-checkbox"></div><span class="tpl-check-label">${t('accountability.bedOnTime')}?</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Reflection -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">💭</span> ${t('accountability.honestReflection')}</div>
                <div class="tpl-box">
                    <div class="tpl-box-title">${t('accountability.whatWentWrong')}:</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.3rem">${t('accountability.tomorrowKey')}:</div>
                    <div class="tpl-line"></div>
                </div>
            </div>

            <div class="tpl-mantra">${t('accountability.mantra')}</div>
        </div>`;
    }
};

// ─── Helpers ────────────────────────────────────────────────

function generateAccountabilityRows(startHour, endHour) {
    const amLabel = I18N.isRTL() ? 'ص' : 'AM';
    const pmLabel = I18N.isRTL() ? 'م' : 'PM';
    let html = '';
    for (let h = startHour; h < endHour; h++) {
        const label = h < 12 ? `${h} ${amLabel}` : h === 12 ? `12 ${pmLabel}` : `${h - 12} ${pmLabel}`;
        html += `<tr>
            <td style="font-weight:600;font-size:0.72rem;color:#888">${label}</td>
            <td class="wide"></td>
            <td></td>
            <td></td>
        </tr>`;
    }
    return html;
}

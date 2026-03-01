/* ============================================================
   Inkpath — Anti-Procrastination Templates
   ============================================================ */

const AntiProcrastinationTemplates = {

    // ─── Procrastination Buster ─────────────────────────────────
    'procrastination-buster': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = formatDate(date);

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="procrastination-buster">
            <div class="tpl-header">
                <div>
                    <h2>Procrastination Buster</h2>
                    <div class="tpl-subtitle">Face it. Break it down. Start now.</div>
                </div>
                <div class="tpl-date">${dateStr}</div>
            </div>

            <div class="tpl-quote-box">
                "You don't have to feel like doing something to start doing it."
            </div>

            <!-- Eisenhower Matrix -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📊</span> Priority Matrix (Eisenhower)</div>
                <div class="tpl-matrix">
                    <div class="tpl-matrix-cell urgent-important">
                        <div class="tpl-matrix-label" style="color:#c0392b">⚡ Urgent + Important — DO NOW</div>
                        <div class="tpl-lines-group">
                            ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                    <div class="tpl-matrix-cell not-urgent-important">
                        <div class="tpl-matrix-label" style="color:#e67e22">📅 Not Urgent + Important — SCHEDULE</div>
                        <div class="tpl-lines-group">
                            ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                    <div class="tpl-matrix-cell urgent-not-important">
                        <div class="tpl-matrix-label" style="color:#3498db">👋 Urgent + Not Important — DELEGATE</div>
                        <div class="tpl-lines-group">
                            ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                    <div class="tpl-matrix-cell not-urgent-not-important">
                        <div class="tpl-matrix-label" style="color:#95a5a6">🗑️ Not Urgent + Not Important — DROP</div>
                        <div class="tpl-lines-group">
                            ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Task Breakdown -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🔨</span> Task Breakdown (Big Task → Tiny Steps)</div>
                <div class="${isA5 ? '' : 'tpl-2col'}">
                    ${repeat(2, `
                    <div class="tpl-box" style="margin-bottom:0.5rem">
                        <div class="tpl-box-title">Dreaded Task:</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-box-title" style="margin-top:0.3rem">Why I'm avoiding it:</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-box-title" style="margin-top:0.3rem">Break into 5-min steps:</div>
                        <ul class="tpl-checklist">
                            ${repeat(4, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                        </ul>
                        <div class="tpl-box-title" style="margin-top:0.3rem">Reward after completing:</div>
                        <div class="tpl-line"></div>
                    </div>`)}
                </div>
            </div>

            <!-- Time Traps -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">⏳</span> My Time Traps Today</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>Time Trap</th>
                            <th style="width:70px">Time Lost</th>
                            <th>Trigger</th>
                            <th>Counter-Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="wide" style="color:#ccc">e.g. YouTube</td>
                            <td style="color:#ccc">2 hrs</td>
                            <td class="wide" style="color:#ccc">Boredom</td>
                            <td class="wide" style="color:#ccc">Read a book</td>
                        </tr>
                        ${repeat(isA5 ? 3 : 4, '<tr><td class="wide"></td><td></td><td class="wide"></td><td class="wide"></td></tr>')}
                    </tbody>
                </table>
            </div>

            <!-- Commitment -->
            <div class="tpl-section">
                <div class="tpl-highlight-box">
                    <div class="tpl-box-title" style="text-align:center">⚡ My Commitment Right Now</div>
                    <div style="text-align:center;font-size:0.8rem;color:#666;margin-bottom:0.3rem">
                        I will work on the FIRST task for just 5 minutes. Starting at: _____
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">The hardest part is starting. Once you begin, momentum takes over.</div>
        </div>`;
    },

    // ─── Accountability Sheet ───────────────────────────────────
    'accountability-sheet': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const dateStr = formatDate(date);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="accountability-sheet">
            <div class="tpl-header">
                <div>
                    <h2>Accountability Sheet</h2>
                    <div class="tpl-subtitle">Be honest with yourself. Track everything.</div>
                </div>
                <div style="text-align:right">
                    <div class="tpl-date">${dayName}</div>
                    <div class="tpl-date">${dateStr}</div>
                </div>
            </div>

            <!-- Morning Commitment -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🌅</span> Morning Commitment (Fill BEFORE the day)</div>
                <div class="tpl-highlight-box">
                    <div class="tpl-box-title">Today I WILL complete:</div>
                    <ul class="tpl-checklist">
                        ${repeat(3, '<li><div class="tpl-checkbox"></div><div class="tpl-check-line"></div></li>')}
                    </ul>
                    <div class="tpl-box-title" style="margin-top:0.3rem">Today I will NOT do:</div>
                    <ul class="tpl-checklist">
                        ${repeat(3, '<li><div class="tpl-checkbox round"></div><div class="tpl-check-line"></div></li>')}
                    </ul>
                </div>
            </div>

            <!-- Hourly Check-in -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">⏰</span> Hourly Accountability Log</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th style="width:55px">Time</th>
                            <th>What I Actually Did</th>
                            <th style="width:${isA5 ? '50px' : '70px'}">Productive?</th>
                            <th style="width:${isA5 ? '40px' : '60px'}">Screen?</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${generateAccountabilityRows(isA5 ? 8 : 6, isA5 ? 19 : 22)}
                    </tbody>
                </table>
            </div>

            <!-- Day Score -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📊</span> End of Day Score</div>
                <div class="${isA5 ? '' : 'tpl-2col'}">
                    <div class="tpl-box">
                        <div class="tpl-box-title">Commitments kept: ____ / ____</div>
                        <div class="tpl-progress-bar" style="margin-top:0.3rem">
                            ${repeat(10, '<div class="tpl-progress-segment"></div>')}
                        </div>
                        <div class="tpl-box-title" style="margin-top:0.5rem">Total productive hours:</div>
                        <div class="tpl-line"></div>
                        <div class="tpl-box-title" style="margin-top:0.3rem">Total screen hours:</div>
                        <div class="tpl-line"></div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">Honesty check — Did I:</div>
                        <ul class="tpl-checklist">
                            <li><div class="tpl-checkbox"></div><span class="tpl-check-label">Stick to my time blocks?</span></li>
                            <li><div class="tpl-checkbox"></div><span class="tpl-check-label">Avoid time wasters?</span></li>
                            <li><div class="tpl-checkbox"></div><span class="tpl-check-label">Complete #1 priority?</span></li>
                            <li><div class="tpl-checkbox"></div><span class="tpl-check-label">Stay off screens?</span></li>
                            <li><div class="tpl-checkbox"></div><span class="tpl-check-label">Go to bed on time?</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Reflection -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">💭</span> Honest Reflection</div>
                <div class="tpl-box">
                    <div class="tpl-box-title">What went wrong & why:</div>
                    <div class="tpl-line"></div>
                    <div class="tpl-line"></div>
                    <div class="tpl-box-title" style="margin-top:0.3rem">What I'll change tomorrow:</div>
                    <div class="tpl-line"></div>
                </div>
            </div>

            <div class="tpl-mantra">Accountability is the bridge between goals and accomplishment.</div>
        </div>`;
    }
};

// ─── Helpers ────────────────────────────────────────────────

function generateAccountabilityRows(startHour, endHour) {
    let html = '';
    for (let h = startHour; h < endHour; h++) {
        const label = h < 12 ? `${h} AM` : h === 12 ? '12 PM' : `${h - 12} PM`;
        html += `<tr>
            <td style="font-weight:600;font-size:0.72rem;color:#888">${label}</td>
            <td class="wide"></td>
            <td></td>
            <td></td>
        </tr>`;
    }
    return html;
}

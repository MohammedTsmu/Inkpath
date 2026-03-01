/* ============================================================
   Inkpath — Finance Templates
   ============================================================ */

const FinanceTemplates = {

    // ─── Monthly Budget Tracker ─────────────────────────────────
    'monthly-budget': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const monthName = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

        const incomeRows = isA5 ? 3 : 5;
        const expenseCategories = [
            'Rent / Housing', 'Utilities', 'Groceries / Food', 'Transport',
            'Phone / Internet', 'Insurance', 'Subscriptions', 'Clothing',
            'Entertainment', 'Healthcare', 'Savings / Invest', 'Debt Repayment'
        ];
        const catCount = isA5 ? 8 : 12;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="monthly-budget">
            <div class="tpl-header">
                <div>
                    <h2>Monthly Budget</h2>
                    <div class="tpl-subtitle">Know where every dollar goes.</div>
                </div>
                <div class="tpl-date">${monthName}</div>
            </div>

            <!-- Income -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">💵</span> Income</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>Source</th>
                            <th style="width:90px">Expected</th>
                            <th style="width:90px">Actual</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(incomeRows, '<tr><td class="wide"></td><td></td><td></td></tr>')}
                        <tr style="font-weight:700;background:#f8f7f4">
                            <td style="text-align:right">TOTAL INCOME</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Expenses -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">💸</span> Expenses</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th style="width:80px">Budget</th>
                            <th style="width:80px">Actual</th>
                            <th style="width:70px">+/-</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${expenseCategories.slice(0, catCount).map(c => `
                        <tr>
                            <td class="wide" style="color:#999;text-align:left">${c}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>`).join('')}
                        <tr style="font-weight:700;background:#f8f7f4">
                            <td style="text-align:right">TOTAL EXPENSES</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Summary -->
            <div class="tpl-section">
                <div class="${isA5 ? '' : 'tpl-3col'}">
                    <div class="tpl-highlight-box">
                        <div class="tpl-box-title" style="text-align:center">Total Income</div>
                        <div class="tpl-line" style="border-color:#d4c48a;text-align:center;min-height:1.8em"></div>
                    </div>
                    <div class="tpl-highlight-box">
                        <div class="tpl-box-title" style="text-align:center">Total Expenses</div>
                        <div class="tpl-line" style="border-color:#d4c48a;text-align:center;min-height:1.8em"></div>
                    </div>
                    <div class="tpl-highlight-box">
                        <div class="tpl-box-title" style="text-align:center">Net (Saved)</div>
                        <div class="tpl-line" style="border-color:#d4c48a;text-align:center;min-height:1.8em"></div>
                    </div>
                </div>
            </div>

            <!-- Financial Notes -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📝</span> Notes & Adjustments</div>
                <div class="tpl-lines-group">
                    ${repeat(isA5 ? 2 : 3, '<div class="tpl-line"></div>')}
                </div>
            </div>

            <div class="tpl-mantra">A budget tells your money where to go instead of wondering where it went.</div>
        </div>`;
    },

    // ─── Daily Expense Log ──────────────────────────────────────
    'expense-log': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const monthName = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const rowCount = isA5 ? 15 : Math.min(daysInMonth, 25);

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="expense-log">
            <div class="tpl-header">
                <div>
                    <h2>Expense Log</h2>
                    <div class="tpl-subtitle">Track every purchase. Awareness = control.</div>
                </div>
                <div class="tpl-date">${monthName}</div>
            </div>

            <div class="tpl-section">
                <table class="tpl-table" style="font-size:${isA5 ? '0.6rem' : '0.7rem'}">
                    <thead>
                        <tr>
                            <th style="width:40px">Date</th>
                            <th>Description</th>
                            <th style="width:70px">Category</th>
                            <th style="width:65px">Amount</th>
                            <th style="width:45px">Need?</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(rowCount, (i) => `
                        <tr>
                            <td style="color:#bbb">${i + 1}</td>
                            <td class="wide"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>`)}
                        <tr style="font-weight:700;background:#f8f7f4">
                            <td colspan="3" style="text-align:right">MONTHLY TOTAL</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="${isA5 ? '' : 'tpl-2col'}">
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">⚠️</span> Unnecessary Spending</div>
                    <div class="tpl-lines-group">
                        ${repeat(2, '<div class="tpl-line"></div>')}
                    </div>
                </div>
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">💡</span> Money Saving Ideas</div>
                    <div class="tpl-lines-group">
                        ${repeat(2, '<div class="tpl-line"></div>')}
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">Every dollar has a job. Make them work for you.</div>
        </div>`;
    },

    // ─── Savings Goals Tracker ──────────────────────────────────
    'savings-goals': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const year = date.getFullYear();
        const goalCount = isA5 ? 3 : 4;
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" id="savings-goals">
            <div class="tpl-header">
                <div>
                    <h2>Savings Goals Tracker</h2>
                    <div class="tpl-subtitle">Set it. Track it. Reach it.</div>
                </div>
                <div class="tpl-date">${year}</div>
            </div>

            <!-- Savings Goals -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> My Savings Goals</div>
                ${repeat(goalCount, (i) => `
                <div class="tpl-box" style="margin-bottom:0.6rem">
                    <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.3rem">
                        <span class="tpl-priority ${i === 0 ? 'high' : i === 1 ? 'medium' : 'low'}">${i + 1}</span>
                        <span class="label" style="font-size:0.65rem;color:#888">Goal:</span>
                        <div style="flex:1;border-bottom:1px solid #e0ddd8;min-height:1em"></div>
                    </div>
                    <div style="display:flex;gap:1rem;margin-bottom:0.3rem">
                        <div class="tpl-line-labeled">
                            <span class="label">Target: $</span>
                            <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em;min-width:60px"></div>
                        </div>
                        <div class="tpl-line-labeled">
                            <span class="label">Deadline:</span>
                            <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em;min-width:60px"></div>
                        </div>
                    </div>
                    <div class="tpl-box-title">Monthly progress:</div>
                    <div class="tpl-progress-bar">
                        ${repeat(12, (m) => `<div class="tpl-progress-segment" title="${months[m]}"></div>`)}
                    </div>
                    <div style="display:flex;justify-content:space-between;font-size:0.55rem;color:#bbb;margin-top:0.1rem">
                        ${months.map(m => `<span>${m}</span>`).join('')}
                    </div>
                </div>`)}
            </div>

            <!-- Net Worth Snapshot -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📊</span> Net Worth Snapshot</div>
                <div class="${isA5 ? '' : 'tpl-2col'}">
                    <div class="tpl-box">
                        <div class="tpl-box-title">Assets (What I Own)</div>
                        ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                        <div class="tpl-line-labeled" style="margin-top:0.3rem;font-weight:600">
                            <span class="label">Total:</span>
                            <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div>
                        </div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">Debts (What I Owe)</div>
                        ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                        <div class="tpl-line-labeled" style="margin-top:0.3rem;font-weight:600">
                            <span class="label">Total:</span>
                            <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">Pay yourself first. Your future self will thank you.</div>
        </div>`;
    }
};

/* ============================================================
   Inkpath — Finance Templates
   ============================================================ */

const FinanceTemplates = {

    // ─── Monthly Budget Tracker ─────────────────────────────────
    'monthly-budget': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const monthName = I18N.getMonthName(date);

        const incomeRows = isA5 ? 3 : 5;
        const expenseCategories = [
            t('budget.rent'), t('budget.utilities'), t('budget.groceries'), t('budget.transport'),
            t('budget.phone'), t('budget.insurance'), t('budget.subscriptions'), t('budget.clothing'),
            t('budget.entertainment'), t('budget.healthcare'), t('budget.savings'), t('budget.debt')
        ];
        const catCount = isA5 ? 8 : 12;

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${I18N.getDir()}" id="monthly-budget">
            <div class="tpl-header">
                <div>
                    <h2>${t('budget.title')}</h2>
                    <div class="tpl-subtitle">${t('budget.subtitle')}</div>
                </div>
                <div class="tpl-date">${monthName}</div>
            </div>

            <!-- Income -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">💵</span> ${t('budget.income')}</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>${t('budget.source')}</th>
                            <th style="width:90px">${t('budget.expected')}</th>
                            <th style="width:90px">${t('budget.actual')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(incomeRows, '<tr><td class="wide"></td><td></td><td></td></tr>')}
                        <tr style="font-weight:700;background:#f8f7f4">
                            <td style="text-align:right">${t('budget.totalIncome')}</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Expenses -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">💸</span> ${t('budget.expenses')}</div>
                <table class="tpl-table">
                    <thead>
                        <tr>
                            <th>${t('budget.category')}</th>
                            <th style="width:80px">${t('budget.budgetCol')}</th>
                            <th style="width:80px">${t('budget.actual')}</th>
                            <th style="width:70px">${t('budget.diff')}</th>
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
                            <td style="text-align:right">${t('budget.totalExpenses')}</td>
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
                        <div class="tpl-box-title" style="text-align:center">${t('budget.totalIncomeLabel')}</div>
                        <div class="tpl-line" style="border-color:#d4c48a;text-align:center;min-height:1.8em"></div>
                    </div>
                    <div class="tpl-highlight-box">
                        <div class="tpl-box-title" style="text-align:center">${t('budget.totalExpensesLabel')}</div>
                        <div class="tpl-line" style="border-color:#d4c48a;text-align:center;min-height:1.8em"></div>
                    </div>
                    <div class="tpl-highlight-box">
                        <div class="tpl-box-title" style="text-align:center">${t('budget.netSaved')}</div>
                        <div class="tpl-line" style="border-color:#d4c48a;text-align:center;min-height:1.8em"></div>
                    </div>
                </div>
            </div>

            <!-- Financial Notes -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">📝</span> ${t('budget.notesAdj')}</div>
                <div class="tpl-lines-group">
                    ${repeat(isA5 ? 2 : 3, '<div class="tpl-line"></div>')}
                </div>
            </div>

            <div class="tpl-mantra">${t('budget.mantra')}</div>
        </div>`;
    },

    // ─── Daily Expense Log ──────────────────────────────────────
    'expense-log': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const monthName = I18N.getMonthName(date);
        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const rowCount = isA5 ? 15 : Math.min(daysInMonth, 25);

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${I18N.getDir()}" id="expense-log">
            <div class="tpl-header">
                <div>
                    <h2>${t('expense.title')}</h2>
                    <div class="tpl-subtitle">${t('expense.subtitle')}</div>
                </div>
                <div class="tpl-date">${monthName}</div>
            </div>

            <div class="tpl-section">
                <table class="tpl-table" style="font-size:${isA5 ? '0.6rem' : '0.7rem'}">
                    <thead>
                        <tr>
                            <th style="width:40px">${t('expense.date')}</th>
                            <th>${t('expense.description')}</th>
                            <th style="width:70px">${t('expense.category')}</th>
                            <th style="width:65px">${t('expense.amount')}</th>
                            <th style="width:45px">${t('expense.need')}</th>
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
                            <td colspan="3" style="text-align:right">${t('expense.monthlyTotal')}</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="${isA5 ? '' : 'tpl-2col'}">
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">⚠️</span> ${t('expense.unnecessarySpending')}</div>
                    <div class="tpl-lines-group">
                        ${repeat(2, '<div class="tpl-line"></div>')}
                    </div>
                </div>
                <div class="tpl-section">
                    <div class="tpl-section-title"><span class="icon">💡</span> ${t('expense.savingIdeas')}</div>
                    <div class="tpl-lines-group">
                        ${repeat(2, '<div class="tpl-line"></div>')}
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">${t('expense.mantra')}</div>
        </div>`;
    },

    // ─── Savings Goals Tracker ──────────────────────────────────
    'savings-goals': function (date, paperSize) {
        const isA5 = paperSize === 'a5';
        const year = date.getFullYear();
        const goalCount = isA5 ? 3 : 4;
        const months = [
            t('month.janShort'), t('month.febShort'), t('month.marShort'), t('month.aprShort'),
            t('month.mayShort'), t('month.junShort'), t('month.julShort'), t('month.augShort'),
            t('month.sepShort'), t('month.octShort'), t('month.novShort'), t('month.decShort')
        ];

        return `
        <div class="template-page ${isA5 ? 'a5' : ''}" dir="${I18N.getDir()}" id="savings-goals">
            <div class="tpl-header">
                <div>
                    <h2>${t('savings.title')}</h2>
                    <div class="tpl-subtitle">${t('savings.subtitle')}</div>
                </div>
                <div class="tpl-date">${year}</div>
            </div>

            <!-- Savings Goals -->
            <div class="tpl-section">
                <div class="tpl-section-title"><span class="icon">🎯</span> ${t('savings.myGoals')}</div>
                ${repeat(goalCount, (i) => `
                <div class="tpl-box" style="margin-bottom:0.6rem">
                    <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.3rem">
                        <span class="tpl-priority ${i === 0 ? 'high' : i === 1 ? 'medium' : 'low'}">${i + 1}</span>
                        <span class="label" style="font-size:0.65rem;color:#888">${t('savings.goal')}</span>
                        <div style="flex:1;border-bottom:1px solid #e0ddd8;min-height:1em"></div>
                    </div>
                    <div style="display:flex;gap:1rem;margin-bottom:0.3rem">
                        <div class="tpl-line-labeled">
                            <span class="label">${t('savings.target')}</span>
                            <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em;min-width:60px"></div>
                        </div>
                        <div class="tpl-line-labeled">
                            <span class="label">${t('savings.deadline')}</span>
                            <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em;min-width:60px"></div>
                        </div>
                    </div>
                    <div class="tpl-box-title">${t('savings.monthlyProgress')}</div>
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
                <div class="tpl-section-title"><span class="icon">📊</span> ${t('savings.netWorth')}</div>
                <div class="${isA5 ? '' : 'tpl-2col'}">
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('savings.assets')}</div>
                        ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                        <div class="tpl-line-labeled" style="margin-top:0.3rem;font-weight:600">
                            <span class="label">${t('savings.total')}</span>
                            <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div>
                        </div>
                    </div>
                    <div class="tpl-box">
                        <div class="tpl-box-title">${t('savings.debts')}</div>
                        ${repeat(isA5 ? 3 : 4, '<div class="tpl-line"></div>')}
                        <div class="tpl-line-labeled" style="margin-top:0.3rem;font-weight:600">
                            <span class="label">${t('savings.total')}</span>
                            <div class="line" style="border-bottom:1px solid #e0ddd8;flex:1;min-height:1em"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tpl-mantra">${t('savings.mantra')}</div>
        </div>`;
    }
};

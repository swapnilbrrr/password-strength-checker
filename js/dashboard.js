import { Logger } from './logger.js';

const dashboardContainer = document.getElementById('dashboard');

export const Dashboard = (() => {
    const renderStats = () => {
        if (!dashboardContainer) return;

        const logs = Logger.getLogs();
        const total = logs.length;

        if (total === 0) {
            dashboardContainer.innerHTML = `<p>No password attempts have been logged yet.</p>`;
            return;
        }

        const avgLength = (logs.reduce((sum, log) => sum + log.length, 0) / total).toFixed(1);
        const strengths = logs.map(log => log.strength);
        const strongCount = strengths.filter(s => s === 'Strong').length;
        const mediumCount = strengths.filter(s => s === 'Medium').length;
        const weakCount = strengths.filter(s => s === 'Weak').length;

        dashboardContainer.innerHTML = `
            <h3>Password Attempt Summary</h3>
            <ul>
                <li>Total Attempts: <strong>${total}</strong></li>
                <li>Average Length: <strong>${avgLength}</strong></li>
                <li>Strong Passwords: <strong>${strongCount}</strong></li>
                <li>Medium Passwords: <strong>${mediumCount}</strong></li>
                <li>Weak Passwords: <strong>${weakCount}</strong></li>
            </ul>
        `;
    };

    return {
        renderStats
    };
})();


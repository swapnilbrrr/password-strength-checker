export const Logger = (() => {
    const LOG_KEY = 'passwordLogs';

    const getLogs = () => {
        const logs = localStorage.getItem(LOG_KEY);
        return logs ? JSON.parse(logs) : [];
    };

    const saveLogs = (logs) => {
        localStorage.setItem(LOG_KEY, JSON.stringify(logs));
    };

    const addLog = ({strength, length, timestamp}) => {
        const logs = getLogs();
        logs.push({
            strength,
            length,
            timestamp: timestamp || new Date().toISOString()
        });
        saveLogs(logs);
        console.log('Password metadata logged:', logs[logs.length - 1]);
    };

    return {
        addLog,
        getLogs
    };
})();

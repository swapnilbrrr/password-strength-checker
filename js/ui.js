import { checkPasswordStrength } from './validator.js';
import { getAISuggestion } from './ai.js';
import { passwordPolicy } from './policy.js';
import { Logger } from './logger.js';
import { Dashboard } from './dashboard.js';
import { generateSecurePassword } from './generator.js';

const passwordInput = document.getElementById('password');
const strengthMeter = document.getElementById('strength-meter');
const feedback = document.getElementById('feedback');
const aiSuggestion = document.getElementById('ai-suggestion');
const toggleVisibility = document.getElementById('toggle-visibility');
const generateBtn = document.getElementById('generate-password');
const generatedPasswordField = document.getElementById('generated-password');
const copyBtn = document.getElementById('copy-password');
const dashboardSection = document.querySelector('.dashboard-section');
const toggleDashboardBtn = document.getElementById('toggle-dashboard');

/**
 * Main update function to orchestrate UI changes.
 */
function updateUI() {
    const password = passwordInput.value;
    const { score, feedback: strengthText } = checkPasswordStrength(password);
    const suggestion = getAISuggestion(password, passwordPolicy);

    updateMeter(score);
    updateFeedback(strengthText);
    updateAISuggestion(suggestion);

    // Log the attempt and update the dashboard
    Logger.addLog({
        strength: strengthText,
        length: password.length,
    });
    Dashboard.renderStats();
}

function updateMeter(score) {
    let color = '#e53e3e'; // Weak
    let width = score * 20;

    if (score >= 5) {
        color = '#38a169'; // Strong
    } else if (score >= 3) {
        color = '#dd6b20'; // Medium
    }
    
    strengthMeter.style.width = `${width}%`;
    strengthMeter.style.backgroundColor = color;
}

function updateFeedback(text) {
    feedback.textContent = text;
}

function updateAISuggestion(text) {
    aiSuggestion.textContent = text;
}

// Initial state setup
document.addEventListener('DOMContentLoaded', () => {
    localStorage.clear(); // Reset analytics on refresh
    passwordInput.addEventListener('input', updateUI);
    Dashboard.renderStats(); // Initial render

    toggleVisibility.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        document.querySelector('.eye').style.display = isPassword ? 'none' : 'block';
        document.querySelector('.eye-off').style.display = isPassword ? 'block' : 'none';
    });

    generateBtn.addEventListener('click', () => {
        const newPassword = generateSecurePassword();
        generatedPasswordField.value = newPassword;
    });

    copyBtn.addEventListener('click', () => {
        if (generatedPasswordField.value) {
            generatedPasswordField.select();
            document.execCommand('copy');
            alert('Password copied to clipboard!');
        }
    });

    toggleDashboardBtn.addEventListener('click', () => {
        const isVisible = dashboardSection.classList.toggle('visible');
        toggleDashboardBtn.textContent = isVisible ? 'Hide Analytics' : 'View Analytics';
    });

    // Set initial theme
    document.body.classList.add('light-mode');
    document.querySelector('.eye-off').style.display = 'none';
});

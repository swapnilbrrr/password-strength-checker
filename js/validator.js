import { passwordPolicy } from './policy.js';

/**
 * Checks password strength based on the defined policy.
 * @param {string} password - The password to check.
 * @returns {object} An object containing the score and feedback string ('Weak', 'Medium', 'Strong').
 */
export function checkPasswordStrength(password) {
    if (!password) {
        return { score: 0, feedback: '' };
    }

    let score = 0;
    const { minLength, requireUppercase, requireLowercase, requireNumbers, requireSymbols, commonPasswords, disallowSequences } = passwordPolicy;

    // Penalty for common passwords
    if (commonPasswords.includes(password.toLowerCase())) {
        return { score: 0, feedback: 'Weak' };
    }

    // Penalty for sequences
    if (disallowSequences && hasSequence(password)) {
        return { score: 1, feedback: 'Weak' };
    }

    // Score based on policy compliance
    if (password.length >= minLength) score++;
    if (requireUppercase && /[A-Z]/.test(password)) score++;
    if (requireLowercase && /[a-z]/.test(password)) score++;
    if (requireNumbers && /\d/.test(password)) score++;
    if (requireSymbols && /[^A-Za-z0-9]/.test(password)) score++;
    if (password.length > 15) score++; // Bonus for extra length

    let feedback = 'Weak';
    if (score >= 5) {
        feedback = 'Strong';
    } else if (score >= 3) {
        feedback = 'Medium';
    }

    return { score, feedback };
}

/**
 * Checks for sequential characters in a password (e.g., "abc", "123").
 * @param {string} password - The password to check.
 * @returns {boolean} True if a sequence is found.
 */
function hasSequence(password) {
    for (let i = 0; i < password.length - 2; i++) {
        const char1 = password.charCodeAt(i);
        const char2 = password.charCodeAt(i + 1);
        const char3 = password.charCodeAt(i + 2);

        if (char1 + 1 === char2 && char2 + 1 === char3) {
            return true; // Found a sequence
        }
    }
    return false;
}


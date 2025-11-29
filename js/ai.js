/**
 * AI-Powered Password Suggestion Engine.
 * Analyzes a password and provides a comprehensive list of suggestions for improvement.
 */
export function getAISuggestion(password, policy) {
    if (!password) return "";

    let suggestions = [];
    const { minLength, requireUppercase, requireLowercase, requireNumbers, requireSymbols, commonPasswords, disallowSequences } = policy;

    if (password.length < minLength) {
        suggestions.push(`Try a password with at least ${minLength} characters.`);
    }
    if (requireUppercase && !/[A-Z]/.test(password)) {
        suggestions.push("Include at least one uppercase letter.");
    }
    if (requireLowercase && !/[a-z]/.test(password)) {
        suggestions.push("Include at least one lowercase letter.");
    }
    if (requireNumbers && !/\d/.test(password)) {
        suggestions.push("Add some numbers to the mix.");
    }
    if (requireSymbols && !/[^A-Za-z0-9]/.test(password)) {
        suggestions.push("Use symbols (e.g., !@#$%) for extra strength.");
    }
    if (commonPasswords.includes(password.toLowerCase())) {
        suggestions.push("This password is too common. Please choose a more unique one.");
    }
    if (disallowSequences && hasSequence(password)) {
        suggestions.push("Avoid sequential characters like 'abc' or '123'.");
    }

    if (suggestions.length === 0) {
        return "Excellent! This is a strong and secure password.";
    }

    return "Suggestions: " + suggestions.join(" ");
}

/**
 * Helper function to detect sequences.
 */
function hasSequence(password) {
    for (let i = 0; i < password.length - 2; i++) {
        const c1 = password.charCodeAt(i);
        const c2 = password.charCodeAt(i + 1);
        const c3 = password.charCodeAt(i + 2);
        if (c1 + 1 === c2 && c2 + 1 === c3) return true;
    }
    return false;
}


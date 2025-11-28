import { passwordPolicy } from './policy.js';

/**
 * Generates a secure, policy-compliant password.
 */
export function generateSecurePassword() {
    const { minLength, requireUppercase, requireLowercase, requireNumbers, requireSymbols } = passwordPolicy;
    
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let charSet = "";
    if (requireUppercase) charSet += upper;
    if (requireLowercase) charSet += lower;
    if (requireNumbers) charSet += numbers;
    if (requireSymbols) charSet += symbols;

    let password = "";
    for (let i = 0; i < minLength; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    return password;
}

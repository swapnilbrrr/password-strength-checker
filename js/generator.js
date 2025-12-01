import { passwordPolicy } from './policy.js';

/**
 * Generates a cryptographically secure random number within a given range.
 * @param {number} max - The exclusive maximum value.
 * @returns {number} A random integer between 0 and max - 1.
 */
function getRandomCrypto(max) {
    const randomValues = new Uint32Array(1);
    window.crypto.getRandomValues(randomValues);
    return randomValues[0] % max;
}

/**
 * Shuffles an array in place using the Fisher-Yates algorithm.
 * @param {Array} array - The array to shuffle.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = getRandomCrypto(i + 1);
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

/**
 * Generates a secure, policy-compliant password aligned with NIST principles (randomness).
 */
export function generateSecurePassword() {
    const { minLength, requireUppercase, requireLowercase, requireNumbers, requireSymbols } = passwordPolicy;
    
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    // Using a more comprehensive symbol set
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let charSet = "";
    let guaranteedChars = [];

    if (requireUppercase) {
        charSet += upper;
        guaranteedChars.push(upper[getRandomCrypto(upper.length)]);
    }
    if (requireLowercase) {
        charSet += lower;
        guaranteedChars.push(lower[getRandomCrypto(lower.length)]);
    }
    if (requireNumbers) {
        charSet += numbers;
        guaranteedChars.push(numbers[getRandomCrypto(numbers.length)]);
    }
    if (requireSymbols) {
        charSet += symbols;
        guaranteedChars.push(symbols[getRandomCrypto(symbols.length)]);
    }

    // If for some reason no character sets are required, default to lowercase
    if (charSet === "") {
        charSet = lower;
    }

    let passwordArray = [...guaranteedChars];
    const remainingLength = minLength - passwordArray.length;

    for (let i = 0; i < remainingLength; i++) {
        const randomIndex = getRandomCrypto(charSet.length);
        passwordArray.push(charSet[randomIndex]);
    }

    // Shuffle the array to ensure guaranteed characters are not always at the start
    shuffleArray(passwordArray);

    return passwordArray.join('');
}

export const passwordPolicy = {
    minLength: 12,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSymbols: true,
    commonPasswords: [ // A small list of common passwords to check against
        "password", "123456", "12345678", "123456789", "qwerty", "111111", "abc123", "password1", "12345", "1234", "fuckyou", "iloveyou", "admin", "welcome", "letmein"
    ],
    // Disallow sequences of 3 or more characters (e.g., "abc", "123")
    disallowSequences: true, 
};


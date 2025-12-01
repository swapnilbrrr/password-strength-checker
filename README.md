<div align="center">
  <h1>Password Strength Checker & Security Dashboard</h1>
  <p>A modern, web-based tool for real-time password strength assessment, featuring a secure password generator and an analytics dashboard.</p>
</div>

This project is designed as a practical security utility and as a demonstrable evidence of my skillset for SOC, GRC, and security engineering roles.

---

## Key Features

-   **Comprehensive Strength Analysis:** Real-time validation against a robust, configurable security policy inspired by modern standards (e.g., NIST guidelines).
-   **Intelligent rule-based suggestion engine (AI-inspired heuristics):** Get clear, actionable feedback to improve your password's security, checking for length, character types, common passwords, and sequential characters.
-   **Secure Password Generator:** Create strong, policy-compliant passwords with a single click. The generator is aligned with NIST guidelines, using a cryptographically secure random number generator (`window.crypto`) to ensure high entropy and unpredictability.
-   **Enhanced User Experience:** Includes a password visibility toggle and a one-click copy-to-clipboard feature.
-   **Toggleable Analytics Dashboard:** View statistics on password attempts, including strength distribution and average length.
-   **SOC & GRC-Relevant:** Demonstrates practical skills in risk assessment, policy enforcement, and security awareness, making it a valuable portfolio piece.

---

---

## 🛡️ Why This Project Matters for SOC & GRC

This tool demonstrates my understanding of password policies, risk-reduction controls, security awareness mechanisms, and real-time validation similar to enterprise enforcement systems. The dashboard and logging components reflect SOC-style monitoring, and the policy module aligns with GRC principles such as enforceable standards and measurable compliance.

---

## How It Works: Rule-Based Scoring

The password strength is calculated using a straightforward, rule-based scoring system. The core logic resides in `js/validator.js`, which checks the password against a configurable policy defined in `js/policy.js`.

The process is as follows:

1.  **Initial Score:** The password starts with a score of 0.
2.  **Points Awarded:** For each rule the password satisfies, a point is added to its score. The rules include:
    *   **Length:** Meets the minimum length requirement (currently 12 characters).
    *   **Character Variety:** Contains uppercase letters, lowercase letters, numbers, and symbols.
    *   **No Sequences:** Does not contain common character sequences (e.g., "abc", "123").
3.  **Penalty Applied:** A significant penalty is applied if the password is found in a predefined list of common and easily guessable passwords.
4.  **Final Assessment:** The final score is mapped to a strength category (Weak, Medium, or Strong), providing immediate and clear feedback to the user.

This system provides a transparent and easily understandable measure of password security, directly tying the assessment to enforceable policy rules.

---

## Tech Stack

-   **Frontend:** HTML5, CSS3 (with CSS Variables for theming), JavaScript (ES6 Modules)

---

## Project Structure

```
password-strength-checker/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── ui.js          # Main UI logic and event handling (theme control planned)
│   ├── validator.js   # Password strength validation logic
│   ├── policy.js      # Configurable security policy
│   ├── ai.js          # AI-powered suggestion engine
│   ├── generator.js   # Secure password generation
│   ├── logger.js      # Logging password attempts to localStorage
│   └── dashboard.js   # Analytics dashboard rendering
├── assets/
│   └── (future icons, animations, or policy JSON files)
└── README.md
```

---

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/swapnilbrrr/password-strength-checker.git
    ```
2.  **Open the project:**
    Navigate to the project directory and open `index.html` in your favorite web browser.

---

## Usage Guide

-   **Test a Password:** Type in the input field to see the real-time analysis and AI-powered suggestions.
-   **Generate a Password:** Click the "Generate Secure Password" button to create a new, strong password.
-   **View Analytics:** Click the "View Analytics" button to see statistics on your session's password attempts.

---

## Privacy & Security Note

> **Analytics are session-based and reset upon page refresh.**
> **This tool does not store or transmit passwords.**

---

## Future Enhancements

-   [ ] **Dual-Theme UI:** A sleek, professional interface with a toggle for light and dark modes.
-   [ ] **zxcvbn Integration:** Incorporate the `zxcvbn` library for even more advanced, entropy-based strength estimation.
-   [ ] **Node.js Backend:** Implement a backend for persistent, centralized logging and user-specific reporting.
-   [ ] **Advanced Dashboards:** Add more detailed visualizations, such as charts and historical data trends.
-   [ ] **Customizable Policies:** Allow users to customize password policies directly from the UI.
-   [ ] **Deploy to the Web:** Host the application on a service like Netlify or GitHub Pages for a live, interactive demo.

---

<div align="center">
  **Swapnil Katuwal** – Aspiring SOC Analyst & Security Enthusiast
  <br>
  <a href="https://www.linkedin.com/in/swapnil-katuwal-bb7529309/">LinkedIn</a> | <a href="https://github.com/swapnilbrrr">GitHub</a>
</div>

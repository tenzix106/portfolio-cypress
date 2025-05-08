// // XPath selectors for Login Page elements
// const loginLocators = {
//     // Input fields
//     usernameInput: "//input[@id='username' or @name='username' or @placeholder='Username']",
//     passwordInput: "//input[@id='password' or @name='password' or @type='password']",
    
//     // Buttons
//     loginButton: "//button[@type='submit' or contains(text(), 'Login') or contains(@class, 'login-button')]",
//     forgotPasswordLink: "//a[contains(text(), 'Forgot Password') or contains(@href, 'forgot-password')]",
    
//     // Messages and alerts
//     errorMessage: "//div[contains(@class, 'error-message') or contains(@class, 'alert-error')]",
//     successMessage: "//div[contains(@class, 'success-message') or contains(@class, 'alert-success')]",
    
//     // Remember me checkbox
//     rememberMeCheckbox: "//input[@type='checkbox' and contains(@name, 'remember')]",
    
//     // Social login buttons
//     googleLoginButton: "//button[contains(@class, 'google-login') or contains(text(), 'Google')]",
//     facebookLoginButton: "//button[contains(@class, 'facebook-login') or contains(text(), 'Facebook')]",
    
//     // Registration link
//     registerLink: "//a[contains(text(), 'Register') or contains(@href, 'register')]",
    
//     // Dynamic selectors (using contains)
//     dynamicErrorMessage: (message) => `//div[contains(@class, 'error-message') and contains(text(), '${message}')]`,
    
//     // Form validation messages
//     usernameValidation: "//input[@id='username']/following-sibling::div[contains(@class, 'validation-message')]",
//     passwordValidation: "//input[@id='password']/following-sibling::div[contains(@class, 'validation-message')]"
// }

// export default loginLocators 
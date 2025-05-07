class Logger {
    static info(message, step = '') {
        const timestamp = new Date().toISOString();
        const stepInfo = step ? `[Step: ${step}] ` : '';
        console.log(`[INFO] ${timestamp} - ${stepInfo}${message}`);
    }

    static error(message, step = '') {
        const timestamp = new Date().toISOString();
        const stepInfo = step ? `[Step: ${step}] ` : '';
        console.error(`[ERROR] ${timestamp} - ${stepInfo}${message}`);
    }

    static testStep(stepNumber, description) {
        console.log(`\n[TEST STEP ${stepNumber}] ${description}`);
    }

    static testSection(sectionName) {
        console.log(`\n[TEST SECTION] ${sectionName}`);
    }
}

export default Logger; 
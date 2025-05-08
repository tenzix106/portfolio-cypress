import Logger from './Logger';

class CommonUtils {
    /**
     * Verifies if an element is visible
     * @param {string} element - XPath of the element to verify
     * @param {string} elementName - Name of the element for logging
     */
    verifyVisible(element, elementName) {
        Logger.info(`Verifying ${elementName} is visible`, "Verification");
        cy.xpath(element).should("be.visible");
        Logger.info(`${elementName} is visible`, "Verification");
    }

    /**
     * Verifies if an element is disabled
     * @param {string} element - XPath of the element to verify
     * @param {string} elementName - Name of the element for logging
     */
    verifyDisabled(element, elementName) {
        Logger.info(`Verifying ${elementName} is disabled`, "Verification");
        cy.xpath(element).should("be.disabled");
        Logger.info(`${elementName} is disabled`, "Verification");
    }

    /**
     * Verifies if an element is enabled
     * @param {string} element - XPath of the element to verify
     * @param {string} elementName - Name of the element for logging
     */
    verifyEnabled(element, elementName) {
        Logger.info(`Verifying ${elementName} is enabled`, "Verification");
        cy.xpath(element).should("not.be.disabled");
        Logger.info(`${elementName} is enabled`, "Verification");
    }

    /**
     * Verifies multiple elements are visible
     * @param {Array} elements - Array of objects containing element xpath and name
     * @param {string} sectionName - Name of the section being verified
     */
    verifyMultipleElements(elements, sectionName) {
        Logger.testSection(`${sectionName} Verification`);
        Logger.info(`Starting ${sectionName} verification`, "Verification");
        
        try {
            elements.forEach((element, index) => {
                Logger.info(`Verifying element ${index + 1} of ${elements.length}`, "Verification");
                this.verifyVisible(element.xpath, element.name);
                Logger.info(`Element ${index + 1} verified successfully`, "Verification");
            });
            Logger.info(`All ${sectionName} elements verified successfully`, "Verification");
        } catch (error) {
            Logger.error(`Error verifying ${sectionName}: ${error}`, "Verification");
            throw error;
        }
    }

    /**
     * Clicks an element and logs the action
     * @param {string} element - XPath of the element to click
     * @param {string} elementName - Name of the element for logging
     */
    clickElement(element, elementName) {
        Logger.info(`Clicking ${elementName}`, "Clicking");
        cy.xpath(element).click();
        Logger.info(`Successfully clicked ${elementName}`, "Clicking");
    }

    /**
     * Scrolls to an element and logs the action
     * @param {string} element - XPath of the element to scroll to
     * @param {string} elementName - Name of the element for logging
     */
    scrollToElement(element, elementName) {
        Logger.info(`Scrolling to ${elementName}`, "Scrolling");
        cy.xpath(element).scrollIntoView();
        Logger.info(`Successfully scrolled to ${elementName}`, "Scrolling");
    }

    /**
     * Verifies multiple elements are visible with scrolling
     * @param {Array} elements - Array of objects containing element xpath and name
     * @param {string} sectionName - Name of the section being verified
     */
    verifyMultipleElementsWithScroll(elements, sectionName) {
        Logger.testSection(`${sectionName} Verification`);
        Logger.info(`Starting ${sectionName} verification`, "Verification");
        
        try {
            elements.forEach((element, index) => {
                Logger.info(`Verifying element ${index + 1} of ${elements.length}`, "Verification");
                this.scrollToElement(element.xpath, element.name);
                this.verifyVisible(element.xpath, element.name);
                Logger.info(`Element ${index + 1} verified successfully`, "Verification");
            });
            Logger.info(`All ${sectionName} elements verified successfully`, "Verification");
        } catch (error) {
            Logger.error(`Error verifying ${sectionName}: ${error}`, "Verification");
            throw error;
        }
    }
}

export default new CommonUtils(); 
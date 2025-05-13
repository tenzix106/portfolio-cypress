import aboutLocators from "../locators/aboutLocators";
import CommonUtils from "../utils/commonUtils";
import Logger from "../utils/Logger";

class AboutPage {
    visit() {
        cy.visit(aboutLocators.url);
    }

    verifyAboutPageLabels() {
        const elements = [
            { xpath: aboutLocators.label.aboutTitle, name: "About Title" },
            { xpath: aboutLocators.label.description, name: "Description" },
            { xpath: aboutLocators.label.skillTitle, name: "Skill Title" }
        ];
        CommonUtils.verifyMultipleElements(elements, "About Page Labels");
    }

    verifyAboutPageButtons() {
        const elements = [
            { xpath: aboutLocators.button.viewAllSkills, name: "View All Skills Button" }
        ];
        CommonUtils.verifyMultipleElements(elements, "About Page Buttons");
    }

    verifySkillConveyer() {
        Logger.testStep(2, "Verifying Skill Conveyer");
        CommonUtils.verifyVisible(aboutLocators.skillConveyer, "Skill Conveyer");
        CommonUtils.verifyEnabled(aboutLocators.skillConveyer, "Skill Conveyer");
    }

    clickViewSkillsButton() {
        Logger.testStep(3, "Click View Skills Button");
        CommonUtils.clickElement(aboutLocators.button.viewAllSkills, "View Skills Button");
    }

    verifySkillDialog() {
        Logger.testStep(4, "Verifying Skill Dialog");
        CommonUtils.verifyVisible(aboutLocators.dialog.menu, "Skill Dialog");
    }

    verifySkillDialogElements() {
        const elements = [
            { xpath: aboutLocators.dialog.title, name: "Dialog Title" },
            { xpath: aboutLocators.dialog.description, name: "Dialog Description" },
            { xpath: aboutLocators.dialog.frontendTitle, name: "Frontend Title" },
            { xpath: aboutLocators.dialog.backendTitle, name: "Backend Title" },
            { xpath: aboutLocators.dialog.mobileTitle, name: "Mobile Title" },
            { xpath: aboutLocators.dialog.testingTitle, name: "Testing Title" },
            { xpath: aboutLocators.dialog.othersTitle, name: "Others Title" },
            { xpath: aboutLocators.dialog.icon.javascript, name: "JavaScript Icon" },
            { xpath: aboutLocators.dialog.icon.typescript, name: "TypeScript Icon" },
            { xpath: aboutLocators.dialog.icon.nextjs, name: "NextJS Icon" },
            { xpath: aboutLocators.dialog.icon.html, name: "HTML Icon" },
            { xpath: aboutLocators.dialog.icon.css, name: "CSS Icon" },
            { xpath: aboutLocators.dialog.icon.tailwind, name: "Tailwind Icon" },
            { xpath: aboutLocators.dialog.icon.python, name: "Python Icon" },
            { xpath: aboutLocators.dialog.icon.firebase, name: "Firebase Icon" },
            { xpath: aboutLocators.dialog.icon.flutter, name: "Flutter Icon" },
            { xpath: aboutLocators.dialog.icon.dart, name: "Dart Icon" },
            { xpath: aboutLocators.dialog.icon.cypress, name: "Cypress Icon" },
            { xpath: aboutLocators.dialog.icon.cpp, name: "C++ Icon" },
            { xpath: aboutLocators.dialog.text.javascriptText, name: "Javascript Text"},
            { xpath: aboutLocators.dialog.text.typescriptText, name: "TypeScript Text"},
            { xpath: aboutLocators.dialog.text.nextjsText, name: "NextJS Text"},
            { xpath: aboutLocators.dialog.text.htmlText, name: "HTML Text"},
            { xpath: aboutLocators.dialog.text.cssText, name: "CSS Text"},
            { xpath: aboutLocators.dialog.text.tailwindText, name: "Tailwind Text"},
            { xpath: aboutLocators.dialog.text.pythonText, name: "Python Text"},
            { xpath: aboutLocators.dialog.text.firebaseText, name: "Firebase Text"},
            { xpath: aboutLocators.dialog.text.flutterText, name: "Flutter Text"},
            { xpath: aboutLocators.dialog.text.dartText, name: "Dart Text"},
            { xpath: aboutLocators.dialog.text.cypressText, name: "Cypress Text"},
            { xpath: aboutLocators.dialog.text.cppText, name: "C++ Text"}
        ];
        CommonUtils.verifyMultipleElementsWithScroll(elements, "Skill Dialog Elements");
    }
}

export default new AboutPage();
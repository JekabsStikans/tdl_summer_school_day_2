import BasePage from "./basePage";

class ToolTipsPage extends BasePage {
  static get url() {
    return "/tool-tips";
  }

  static get toolTipButton() {
    return cy.get("#toolTipButton");
  }

  static get texToolTopContainer() {
    return cy.get("#texToolTopContainer");
  }

  static get toolTipTextField() {
    return cy.get("#toolTipTextField");
  }

  static get buttonToolTip() {
    return cy.get("#buttonToolTip");
  }

  static get textFieldToolTip() {
    return cy.get("#textFieldToolTip");
  }

  static get contraryTexToolTip() {
    return cy.get("#contraryTexToolTip");
  }

  static get sectionToolTip() {
    return cy.get("#sectionToolTip");
  }
}

export default ToolTipsPage;


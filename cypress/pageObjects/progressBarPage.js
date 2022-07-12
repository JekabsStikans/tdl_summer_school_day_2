import BasePage from "./basePage";

class ProgressBarPage extends BasePage {
  static get url() {
    return "/progress-bar";
  }

  static get listTab() {
    return cy.get("#demo-tab-list");
  }

  static get gridTab() {
    return cy.get("#demo-tab-grid");
  }

  static get listContainer() {
    return cy.get("#verticalListContainer");
  }

  static get gridContainer() {
    return cy.get("#gridContainer");
  }
}

export default ProgressBarPage;


import BasePage from "./basePage";

class ProgressBarPage extends BasePage {
  static get url() {
    return "/progress-bar";
  }

  static get startStopButton() {
    return cy.get("#startStopButton");
  }

  static get progressBar() {
    return cy.get(".progress-bar");
  }
}

export default ProgressBarPage;


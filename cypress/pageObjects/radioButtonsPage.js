import BasePage from "./basePage";

class RadioButtonsPage extends BasePage {
  static get url() {
    return "/radio-button";
  }

  static get yesRadio() {
    return cy.get("#yesRadio").parent();
  }

  static get impressiveRadio() {
    return cy.get("#impressiveRadio").parent();
  }

  static get noRadio() {
    return cy.get("#noRadio").parent();
  }

  static get selectionMessage() {
    return cy.contains("You have selected ").find(".text-success");
  }
}

export default RadioButtonsPage;


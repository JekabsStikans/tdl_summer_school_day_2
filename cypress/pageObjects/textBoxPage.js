import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get fullNameInput() {
    return cy.get("#userName");
  }

  static get emailInput() {
    return cy.get("#userEmail");
  }

  static get currentAddressInput() {
    return cy.get("#currentAddress");
  }

  static get permanentAddressInput() {
    return cy.get("#permanentAddress");
  }

  static get submitBtn() {
    return cy.get("#submit");
  }

  static get fullNameText() {
    return cy.get(".border > #name");
  }

  static get emailText() {
    return cy.get(".border > #email");
  }

  static get currentAddressText() {
    return cy.get(".border > #currentAddress");
  }

  static get permanentAddressText() {
    return cy.get(".border > #permanentAddress");
  }

  static get xxx() {
    return cy.get("xxx");
  }
}

export default TextBoxPage;

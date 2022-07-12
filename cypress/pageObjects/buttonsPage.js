import BasePage from "./basePage";

class ButtonsPage extends BasePage {
  static get url() {
    return "/buttons";
  }

  static get doubleClickBtn() {
    return cy.get("#doubleClickBtn");
  }

  static get rightClickBtn() {
    return cy.get("#rightClickBtn");
  }

  static get dynamicClickBtn() {
    return cy.get(".btn-primary").not("#doubleClickBtn").not("#rightClickBtn");
  }

  static get selectionMessage() {
    return cy.contains("You have selected ").find(".text-success");
  }
}

export default ButtonsPage;


import BasePage from "./basePage";

class CheckBoxPage extends BasePage {
  static get url() {
    return "/checkbox";
  }

  static get expandAllBtn() {
    return cy.get(".rct-option-expand-all");
  }

  static get collapseAllBtn() {
    return cy.get(".rct-option-collapse-all");
  }

  static findNode(label) {
    return cy.contains(label);
  }

  static nodeCheckbox(label) {
    return cy.contains(label).parent().find(".rct-checkbox");
  }
}

export default CheckBoxPage;


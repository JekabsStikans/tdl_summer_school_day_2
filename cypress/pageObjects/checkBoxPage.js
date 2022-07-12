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

  static node(label) {
    return cy.get("#tree-node").contains(label);
  }

  static nodeCheckbox(label) {
    return this.node(label).parent().find(".rct-checkbox");
  }
}

export default CheckBoxPage;


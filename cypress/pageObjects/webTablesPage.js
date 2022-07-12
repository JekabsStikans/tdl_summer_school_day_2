import BasePage from "./basePage";

class WebTablesPage extends BasePage {
  static get url() {
    return "/webtables";
  }

  static get addRecordBtn() {
    return cy.get("#addNewRecordButton");
  }

  static get firstNameInput() {
    return cy.get("#firstName");
  }

  static get lastNameInput() {
    return cy.get("#lastName");
  }

  static get userEmailInput() {
    return cy.get("#userEmail");
  }

  static get ageInput() {
    return cy.get("#age");
  }

  static get salaryInput() {
    return cy.get("#salary");
  }

  static get departmentInput() {
    return cy.get("#department");
  }

  static get submitFormBtn() {
    return cy.get("#submit");
  }
}

export default WebTablesPage;


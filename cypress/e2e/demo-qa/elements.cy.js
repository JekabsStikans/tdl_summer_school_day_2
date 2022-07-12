import ButtonsPage from "../../pageObjects/buttonsPage";
import CheckBoxPage from "../../pageObjects/checkBoxPage";
import RadioButtonsPage from "../../pageObjects/radioButtonsPage";
import TextBoxPage from "../../pageObjects/textBoxPage";
import WebTablesPage from "../../pageObjects/webTablesPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    // Create textbox scenario
    it("Filling in Text Boxes", () => {
      // fill in textboxes with necessary information
      TextBoxPage.fullNameInput.should("be.visible").type("Jēkabs Stikāns");
      TextBoxPage.emailInput.should("be.visible").type("fake@mail.com");
      TextBoxPage.currentAddressInput.should("be.visible").type("Random house 92");
      TextBoxPage.permanentAddressInput.should("be.visible").type("That other place 5");
      TextBoxPage.submitBtn.should("be.visible").click();

      // validate the paragraphs
      TextBoxPage.fullNameText.should("have.text", "Name:Jēkabs Stikāns");
      TextBoxPage.emailText.should("have.text", "Email:fake@mail.com");
      TextBoxPage.currentAddressText.should("have.text", "Current Address :Random house 92 ");
      TextBoxPage.permanentAddressText.should("have.text", "Permananet Address :That other place 5");
    });
  });


  context("Check box scenarios", () => {
    // Create CheckBoxPage page object
    beforeEach(() => {
      CheckBoxPage.visit();
    });

    // Create checkbox scenario 1:
    it("Checking many boxes", () => {
      // Click the "+"/expand button
      CheckBoxPage.expandAllBtn.should("be.visible").click();
      // Click Notes, React, Angular, General, Excel File.doc
      let nodesToClick = ["Notes", "React", "Angular", "General", "Excel File.doc"]
      nodesToClick.forEach(label => {
        CheckBoxPage.findNode(label).should("be.visible").click();
      })
      // Validate the clicked checkboxes
      CheckBoxPage.nodeCheckbox("Veu").find(".rct-icon-uncheck").should("exist");
      nodesToClick.forEach(label => {
        CheckBoxPage.nodeCheckbox(label).find(".rct-icon-check").should("exist");
      })

    });

    // Create checkbox scenario 2:
    it("Checking one box", () => {
      // Click expand button
      CheckBoxPage.expandAllBtn.should("be.visible").click();
      // Click Office
      CheckBoxPage.findNode("Office").should("be.visible").click();
      // Validate the checked checkboxes
      CheckBoxPage.nodeCheckbox("Office").find(".rct-icon-check").should("exist");

    });
  });


  context("Radio buttons scenario", () => {
    // Create RadioButtons page object
    beforeEach(() => {
      RadioButtonsPage.visit();
    });

    // Scenario 1:
    it("Button clicks and checks", () => {
    // Click yesButton
    RadioButtonsPage.yesRadio.should("exist").click();
    // validate the message
    RadioButtonsPage.selectionMessage.should("be.visible").should("have.text", "Yes")

    // click impressiveButton
    RadioButtonsPage.impressiveRadio.should("exist").click();
    // validate the message
    RadioButtonsPage.selectionMessage.should("be.visible").should("have.text", "Impressive")

    // noButton - validate that the button exists but is disabled
    RadioButtonsPage.noRadio.should("exist").find(".disabled").should("exist");
    });
  });


  context("Web tables scenarios", () => {
    // Create WebTables page object
    beforeEach(() => {
      WebTablesPage.visit();
    });

    // Create scenario 1:
    it("Making an entry and checking the table", () => {
    // Click add record button
    WebTablesPage.addRecordBtn.should("be.visible").click();
    // fill in the necessary information
    WebTablesPage.firstNameInput.should("be.visible").type("Jēkabs");
    WebTablesPage.lastNameInput.should("be.visible").type("Stikāns");
    WebTablesPage.userEmailInput.should("be.visible").type("fake@mail.com");
    WebTablesPage.ageInput.should("be.visible").type("22");
    WebTablesPage.salaryInput.should("be.visible").type("999");
    WebTablesPage.departmentInput.should("be.visible").type("Software development");
    // click submit button
    WebTablesPage.submitFormBtn.should("be.visible").click();
    // search for the user based on previously added information
    // validate that the user is visible
    cy.contains("Jēkabs").should("be.visible");

    });

    // Create Scenario 2:
    it("Deleting all table entries", () => {
    // Delete all table rows
    WebTablesPage.deleteRecordBtn(3).should("be.visible").click();
    WebTablesPage.deleteRecordBtn(2).should("be.visible").click();
    WebTablesPage.deleteRecordBtn(1).should("be.visible").click();
    // Validate that we see text - No rows found
    cy.get(".rt-noData").should("have.text", "No rows found");
    });
  });


  context("Buttons scenario", () => {
    // Create Buttons page object
    beforeEach(() => {
      ButtonsPage.visit();
    });

    // Create buttons clicking scenario
    it("Button clicks and checks", () => {
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    ButtonsPage.doubleClickBtn.should("be.visible").dblclick();
    // Validate the double click message
    cy.get("#doubleClickMessage").should("have.text", "You have done a double click")

    // Click rightclick button
    ButtonsPage.rightClickBtn.should("be.visible").rightclick();
    // Validate the right click message
    cy.get("#rightClickMessage").should("have.text", "You have done a right click")

    // Do dynamic click
    ButtonsPage.dynamicClickBtn.should("be.visible").click();
    // Validate dynamic click message
    cy.get("#dynamicClickMessage").should("have.text", "You have done a dynamic click")
    });
  });
});

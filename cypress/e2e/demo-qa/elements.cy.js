import CheckBoxPage from "../../pageObjects/checkBoxPage";
import TextBoxPage from "../../pageObjects/textBoxPage";

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
    beforeEach(() => {
      CheckBoxPage.visit();
    });

    // Create CheckBoxPage page object
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

  context("Radio button scenarios", () => {
    // Create RadioButtons page object
    // Scenario 1:
    // Click yesButton
    // validate the message
    // click impressiveButton
    // validate the message
    // noButton - validate that the button exists but is disabled
  });

  context("Web tables scenarios", () => {
    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible

    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found
  });

  context("Buttons scenarios", () => {
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
  });
});

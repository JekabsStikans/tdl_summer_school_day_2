// import page objects
import SelectablePage from "../../pageObjects/selectablePage";


context("Interactions", () => {
  context("Selectable", () => {
    // Create Selectable page object
    beforeEach(() => {
      SelectablePage.visit();
    });

    // Create scenario 1:
    it("Click on list", () => {
    // Click on "Cras justo odio"
    SelectablePage.listContainer.contains("Cras justo odio").should("be.visible").click();
    // Validate that class contains active
    SelectablePage.listContainer.contains("Cras justo odio").get(".active").should("exist");

    // Click on "Dapibus ac facilisis in"
    SelectablePage.listContainer.contains("Dapibus ac facilisis in").should("be.visible").click();
    // Validate that chosen buttons contains class active
    SelectablePage.listContainer.contains("Dapibus ac facilisis in").get(".active").should("exist");
    });

    // Create scenario 2:
    it("Click on grid", () => {
      // Click on grid
      SelectablePage.gridTab.should("be.visible").click();
      // Click on numbers 4, 8, 6, 2
      const numSequence = ["Four", "Eight", "Six", "Two"];
      numSequence.forEach(number => {
        SelectablePage.gridContainer.contains(number).click();
      });
      // Validate that chosen buttons contains class active
      numSequence.forEach(number => {
        SelectablePage.gridContainer.contains(number).get(".active").should("exist");
      });
    });
    
  });
});

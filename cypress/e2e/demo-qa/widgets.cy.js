import ProgressBarPage from "../../pageObjects/progressBarPage";
import ToolTipsPage from "../../pageObjects/toolTipsPage";



context("Widgets", () => {
  context("Tool tips", () => {
    // 1. https://demoqa.com/tool-tips
    beforeEach(() => {
      ToolTipsPage.visit();
    });

    it("Hover and validate", () => {
      // - Hover over the - "hover me button", "field", "Contrary", "1.10.32"
      // - Validate text in the tooltip/pop-up
      ToolTipsPage.toolTipButton.should("be.visible").trigger("mouseover");
      ToolTipsPage.buttonToolTip.should("be.visible").find(".tooltip-inner").should("have.text", "You hovered over the Button");

      ToolTipsPage.toolTipTextField.should("be.visible").trigger("mouseover");
      ToolTipsPage.textFieldToolTip.should("be.visible").find(".tooltip-inner").should("have.text", "You hovered over the text field");

      ToolTipsPage.texToolTopContainer.contains("Contrary").trigger("mouseover");
      ToolTipsPage.contraryTexToolTip.should("be.visible").find(".tooltip-inner").should("have.text", "You hovered over the Contrary");

      ToolTipsPage.texToolTopContainer.contains("1.10.32").trigger("mouseover");
      ToolTipsPage.sectionToolTip.should("be.visible").find(".tooltip-inner").should("have.text", "You hovered over the 1.10.32");
    });
  });


  // context("Progress bar", () => {
  //   // 2. https://demoqa.com/progress-bar
  //   beforeEach(() => {
  //     ProgressBarPage.visit();
  //   });

  //   it("Start, stop, check", () => {
  //     // - click start
  //     // - stop at 25% - validate that the bar value is 25%
  //     // - click start
  //     // - stop at 75% - validate that the bar value is 75%
  //     // - click start
  //     // - stop at 99% - validate that the bar value is 99%
  //   }); 
  // });
});

describe("password-overview.cy.ts", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("without any passwords", () => {
    it("shows empty state message if there aren't any passwords", () => {
      cy.get("[data-cy='passwords-empty-state-message']").should("be.visible");
    });
  });

  context("with previously added passwords", () => {
    it("previously added passwords persist over page reloads", () => {});
  });
});

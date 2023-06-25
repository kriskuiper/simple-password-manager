describe("add-password.cy.ts", () => {
  beforeEach(() => {
    cy.fixture("client-response").then((json) => {
      cy.intercept("GET", "/api/clients", json);
    });

    cy.visit("/add");
  });

  it("can add a single password", () => {
    cy.get("[data-cy='add-page-title-input']").type("beepbeepboop");
    cy.get("[data-cy='add-page-password-input']").type("bkmmvekpakjdv");
    cy.get("[data-cy='add-page-client-input']").select(1);
    cy.get("[data-cy='add-page-submit-button']").click();

    cy.get("[data-cy='add-page-success-message']").should("be.visible");

    cy.get("[data-cy='add-page-back-to-home-button']").click();

    cy.get("[data-cy='password-card']").should("be.visible");
  });

  it("can add multiple passwords", () => {
    cy.get("[data-cy='add-page-title-input']").type("beepbeepboop");
    cy.get("[data-cy='add-page-password-input']").type("bkmmvekpakjdv");
    cy.get("[data-cy='add-page-client-input']").select(1);
    cy.get("[data-cy='add-page-submit-button']").click();

    cy.get("[data-cy='add-page-title-input']").type("bapbepbip");
    cy.get("[data-cy='add-page-password-input']").type("secret");
    cy.get("[data-cy='add-page-client-input']").select(2);
    cy.get("[data-cy='add-page-submit-button']").click();

    cy.get("[data-cy='add-page-success-message']").should("be.visible");

    cy.get("[data-cy='add-page-back-to-home-button']").click();

    cy.get("[data-cy='password-card']").should("have.length", 2);
  });
});

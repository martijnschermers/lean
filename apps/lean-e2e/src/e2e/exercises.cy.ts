describe("Exercise list", () => {
  it("visits the /exercise page", () => {
    cy.visit("/exercise");
    cy.contains("Bench press");
    cy.contains("Squat");
    cy.contains("Deadlift");
    cy.get("div#exercises").children().should("have.length", 3);
    cy.get("div#exercises").children().should("contain", "Deadlift");
  });
});

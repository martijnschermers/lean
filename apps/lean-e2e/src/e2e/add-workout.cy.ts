describe("Add workout", () => {
  it("Add a workout", () => {
    cy.visit("/login");
    cy.get("input#email").type("myemail@gmail.com");
    cy.get("input#password").type("mypassword");
    cy.get("button#login").click();

    cy.visit("/workout/add");
    cy.get("input#name").type("My workout");
    cy.get("h2#workout-name").should("contain", "My workout");

    cy.get("input#add-exercise").click();
    cy.get("ul#exercises").children().should("have.length", 3);
    cy.get("ul#exercises").children().should("contain", "Deadlift");
    cy.get("label#add-Deadlift").click();
    cy.get("h3#exercise-name").should("contain", "Deadlift");

    cy.get("div#sets").children().should("have.length", 1);
    cy.get("input#reps-0").type("5");
    cy.get("input#weight-0").type("100");
    cy.get("input#reps-0").should("have.value", "05");
    cy.get("input#weight-0").should("have.value", "0100");
    cy.get("input#finished-0").click();
    cy.get("input#finished-0").should("be.checked");

    cy.get("button#add-set").click();
    cy.get("div#sets").children().should("have.length", 2);
    cy.get("button#remove-set-1").click();
    cy.get("div#sets").children().should("have.length", 1);

    cy.get("button#finish").click();

    cy.visit("/workout");
    cy.get("div#workouts").children().should("have.length", 1);
    cy.get("div#workouts").children().should("contain", "My workout");
  });
});

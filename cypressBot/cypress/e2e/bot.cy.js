var i = 0;
for (i = 0; i < 10; i++) {
  describe("template spec", () => {
    it("passes", () => {
      cy.visit("https://tikun-tevot.co.il/");
      cy.get("#contact").click();
      cy.get(".-mt-px").click();
      cy.get("#name").type("name");
      cy.get(".-mt-px").click();
      cy.get("#tel").type("012345");
      cy.get("#email").type("email");
      cy.get(".-mt-px").click();
      cy.get("#home").click();
      cy.get(".carousel-control-next-icon").click();
      cy.get(".carousel-control-next-icon").click();
      cy.get(".carousel-control-next-icon").click();
      cy.get(".-mt-px").click();
      cy.get("#home").click();
    });
  });
}

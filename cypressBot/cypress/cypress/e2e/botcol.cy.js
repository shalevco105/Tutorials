Cypress.on("before:browser:launch", (browser, launchOptions) => {
  if (browser.name === "chrome") {
    launchOptions.args.push(
      "--disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure"
    );
  }
});

describe("template spec", () => {
  it("test", () => {
    // cy.setCookie(
    //   "__Secure-1PSIDCC",
    //   "APoG2W-GPXPLLcewXN_v5djQiVrOyNigVYDB1SOG8WuGTQs_fwblLWgOtRcdfUhf0JUC0II05lY"
    // );
    Cypress.on("before:browser:launch", (browser, launchOptions) => {
      if (browser.name === "chrome") {
        launchOptions.args.push(
          "--disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure"
        );
      }
    });
    cy.setCookie(
      "SIDCC",
      "APoG2W-4aKpXwNDqVJS0A__wQRzu4hNm6VyuHpzFi6DMrF3oLqr8O_e9ve8eGrinJ7peCXy_wA"
    );
    cy.setCookie(
      "SID",
      "aQj3UVhIXyRi8AO6YerNpPPuLXDcS-jx_harv1o-JBO3tiyihI7-YyfrzeSMY1nnrXxpeQ."
    );
    // cy.setCookie("__Secure-1PAPISID", "-y9lUgoAuxF0jJ27/AdtFxHs8V8UcjgC81");
    // cy.setCookie(
    //   "__Secure-1PSID",
    //   "aQj3UX1imvcxKEh8X8zzkcdv4JrkQvhXZZHf99kbfb0duaDoo-7d3Ge2EP4p8ryxGGv7Dg."
    // );
    // cy.setCookie("__Secure-3PAPISID", "-y9lUgoAuxF0jJ27/AdtFxHs8V8UcjgC81");
    // cy.setCookie("__Secure-1PAPISID", "-y9lUgoAuxF0jJ27/AdtFxHs8V8UcjgC81");
    cy.setCookie("APISID", "litR7Fm3_T68tzWY/ADyWOIZwtgsifm_3h");
    cy.setCookie("SAPISID", "-y9lUgoAuxF0jJ27/AdtFxHs8V8UcjgC81");
    cy.setCookie("HSID", "AQ9R8GUB-YZymFGnr");
    // cy.setCookie("__Secure-3PAPISID", "-y9lUgoAuxF0jJ27/AdtFxHs8V8UcjgC81");
    // cy.setCookie(
    // "__Secure-1PSID",
    // "aQj3UVhIXyRi8AO6YerNpPPuLXDcS-jx_harv1o-JBO3tiyidaUQ5YcB3O9rnrjiWFfS_g."
    // );
    cy.setCookie("ASP.NET_SessionId", "adjqoojkwfc34qpwicdaakg5");
    cy.setCookie("SSID", "AJFxrFY16YyRklZ4G");
    cy.setCookie("SAPISID", "-y9lUgoAuxF0jJ27/AdtFxHs8V8UcjgC81");
    cy.setCookie(
      "SIDCC",
      "APoG2W-YRCn4suBsBNzTbE6BTnCfvy8cIZdByrwnybn2PsJDI_GFcPVpQ8JEBZe3x9H4GTj0JQ"
    );
    cy.setCookie(
      "SID",
      "aQj3UVhIXyRi8AO6YerNpPPuLXDcS-jx_harv1o-JBO3tiyihI7-YyfrzeSMY1nnrXxpeQ."
    );
    cy.visit("https://www.leaan.co.il/", { failOnStatusCode: false });
  });
});

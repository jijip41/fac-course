// Cypress uses a global it function to define tests
// It's just like the test() function

it('can run a test', () => {
  assert.equal(1, 1);
});

// Test a real web page

it('can navigate pages', () => {
  // cy object to run a "command".
  // cy.visit tells Cypress to load URL in the browser and wait for the page to load.

  cy.visit('http://example.cypress.io/');

  // To find an element on the page
  // use cy.contains()
  // then interact with this element using .click()

  cy.contains('within').click();

  // verify that we got to the right place - check url has sub-string
  // cy.url method retrieves the current URL
  // .should method creates an assertion
  cy.url().should('include', '/commands/querying');

  // Getting the sign up form, finding the email input within it, then typing an email into that input
  // cy.get takes a CSS selector to find an element, just like queryselector in the DOM
  // .find works the same way but it searches the children of an element
  // .type simulates trying text via the keybord
  // .submit triggers a form submission

  cy.get('.query-form')
    .find('input[id = "inputEmail"]')
    .type('my-email@test.com');
  cy.get('.query-form').submit();
});

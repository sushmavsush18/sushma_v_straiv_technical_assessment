describe('Automation Exercise - Home page Test', () => {
  beforeEach(() => {
    // Visit the home page
    cy.visit('https://www.automationexercise.com');
  });

  it('home page check', () => {
    // Verify the page title
    cy.title().should('eq', 'Automation Exercise');
  });

  it('click login', () => {
    // Click on the "Signup / Login" link
    cy.contains('a', 'Signup / Login').click();
    cy.url().should('include', '/login');
  });

  it('check login with registered email and password', () => {
    // Click on the "Signup / Login" link
    cy.contains('a', 'Signup / Login').click();
    // Enter email and password in the login form
    cy.get('[data-qa="login-email"]').type('testuser112122@example.com');
    cy.get('[data-qa="login-password"]').type('TestPassword123');
    cy.get('[data-qa="login-button"]').click();
    cy.contains('Logged in as Test User11212').should('be.visible');
  });
})

describe('Automation Exercise - login page Test', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/')

    // Click on the "Signup / Login" link
    cy.contains('a', 'Signup / Login').click();
    cy.url().should('include', '/login');
  })
})

describe('Automation Exercise - Signup Test', () => {
  beforeEach(() => {
      // Visit the login/signup page
      cy.visit('https://automationexercise.com/login');
  });

  it('should sign up a new user successfully', () => {
      // Enter name and email in the signup form
      cy.get('[data-qa="signup-name"]').type('Test User112122');
      cy.get('[data-qa="signup-email"]').type('testuser112122@example.com');
      cy.get('[data-qa="signup-button"]').click();

      // Fill out additional registration details
      cy.get('[id="id_gender1"]').check();  // Select gender
      cy.get('[id="password"]').type('TestPassword123');
      cy.get('[id="days"]').select('10');
      cy.get('[id="months"]').select('May');
      cy.get('[id="years"]').select('1990');

      // Select checkboxes if needed
      cy.get('[id="newsletter"]').check();
      cy.get('[id="optin"]').check();

      // Fill out address details
      cy.get('[id="first_name"]').type('Test');
      cy.get('[id="last_name"]').type('User');
      cy.get('[id="company"]').type('Test Company');
      cy.get('[id="address1"]').type('123 Test Street');
      cy.get('[id="address2"]').type('Apt 456');
      cy.get('[id="country"]').select('United States');
      cy.get('[id="state"]').type('California');
      cy.get('[id="city"]').type('Los Angeles');
      cy.get('[id="zipcode"]').type('90001');
      cy.get('[id="mobile_number"]').type('+1234567890');

      // Submit the form
      cy.get('[data-qa="create-account"]').click();

      // Verify successful account creation
      cy.contains('Account Created!').should('be.visible');
  });
      
});
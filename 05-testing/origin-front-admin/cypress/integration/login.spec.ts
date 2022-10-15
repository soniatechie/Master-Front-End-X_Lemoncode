describe('src/scenes/login.scene specs', () => {
  it('visit the login page', () => {
    cy.visit('/');
  });
  it('should name input has the focus when it clicks on it', () => {
    // Arrange

    // Act
    cy.visit('/');
    cy.findByLabelText('Usuario *').click();

    // Assert
    cy.findByLabelText('Usuario *').should('have.focus');
  });
  it('should name password has the focus when it clicks on it', () => {
    // Arrange

    // Act
    cy.visit('/');
    cy.findByLabelText('Contraseña *').click();

    // Assert
    cy.findByLabelText('Contraseña *').should('have.focus');
  });
  it('should show an alert with a message when type invalid credentials', () => {
    //Arrange
    const user = 'admin';
    const password = 'admin';
    //Act
    cy.findByLabelText('Usuario *').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button', { name: 'Login' }).click();
    //Asset

    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);
    cy.findByRole('alert').should(
      'have.text',
      'Usuario y/o password no válidos'
    );
  });
  it('should navigate to app home when type valid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = 'test';

    // Act
    cy.visit('/');
    cy.findByLabelText('Usuario *').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button', { name: 'Login' }).click();

    // Assert
    cy.url().should('contain', '/submodule-list');
  });
});

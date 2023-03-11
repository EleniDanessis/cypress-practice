/// <reference types="cypress" />

it('Google Search', () => {
    cy.visit('https://google.com')

    cy.get('.gLFyf').type('Automation Step by Step {enter}')

    // cy.contains('Google Search').click()

    // cy.contains('Videos').click()
})

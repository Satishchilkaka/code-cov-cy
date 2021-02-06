
/// <reference types="Cypress" />
describe('Test', () => {
    it('Open local host', () => {
        cy.visit('');
        cy.get('.card').eq(5).click({force:true});
    });
});

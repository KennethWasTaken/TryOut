describe('StartUpTests', () => {
    beforEach('Visit app', () => {
        cy.visit('/');
    })

    it('Add Plant Button Test - disabled', () => {
        cy.get('[data-cy=addPlantBtn]').should(be.disabled);
    });

    it('Filter Test', () => {
        cy.get('[data-cy=plantFilterInput]').type('mo');
        cy.get('[data-cy=plantCard]').should('have.length', 1);
    })

    it('Filter Test', () => {
        cy.visit('/');
    })
});
describe('Back End Test', () => {
    it('Plants Get', () => {
        cy.visit('/');
        cy.get('[data-cy=plantCard]').should('have.length', 3);
    });

    it('mock plant get', () =>{
        cy.server({});
        cy.route({
            method: 'GET',
            url: '/api/Plants',
            status: 200,
            response: 'fixture:plants.json'
        });
        cy.visit('/');
        cy.get('[data-cy=plantCard]').should('have.length', 3);
    });

    it('on error should show error message', () => {
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/Plants',
            status: 500,
            response: 'ERROR'
        });
        cy.visit('/');
        cy.get('[data-cy=plantListError]').should('be.visible');
    });
});



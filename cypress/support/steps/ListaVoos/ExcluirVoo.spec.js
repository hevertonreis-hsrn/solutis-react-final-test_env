import FlightsListPage from '../../pageObjects/flightsListPage'
const flightsPage = new FlightsListPage

When('tento excluir voo de id {string}', (id) => {
    flightsPage.getDeleteBtnId(id)
})

Then('o voo de id {string} é excluído', (id) => {
    cy.get('th')
        .contains(id)
        .should('not.exist')
    
})
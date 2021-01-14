import FlightsListPage from '../../pageObjects/flightsListPage'
const flightsPage = new FlightsListPage

When('tento visualizar voo de id {string}', (id) => {
    flightsPage.detailFlightId(id)
})

Then('visualizo o voo de id {string}', (id) => {
    cy.url().should('contain', id)
    
})

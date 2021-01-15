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

When ('seleciono voos de id {string} e {string}', (id1, id2) => {
    flightsPage.checkFlightId(id1)
    flightsPage.checkFlightId(id2)
})

And ('tento excluir os voos selecionados', () => {
    flightsPage.clickDeleteChecked()
})

Then ('os voos de id {string} e {string} são excluídos', (id1, id2) => {
    cy.get('th')
        .contains(id1)
        .should('not.exist')
    cy.get('th')
        .contains(id2)
        .should('not.exist')
})
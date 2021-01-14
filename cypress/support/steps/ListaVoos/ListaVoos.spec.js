import FlightsListPage from '../../pageObjects/flightsListPage'
const flightsPage = new FlightsListPage

Then('é possível visualizar a lista de voos', () => {
    flightsPage.getTable().should('exist')
})

When('é mudado de página da lista de voos', () => {
    cy.get('tbody > tr > th').first().invoke('text').as('idInicial')
    flightsPage.nextPage()
    
})

Then('a página é mudada', () => {
    cy.get('@idInicial').then(idInicial => {
        cy.get('tbody > tr > th').first()
            .invoke('text')
            .should('not.eq', idInicial)
    })
})

When('mudo a quantidade de voos por página', () => {
    flightsPage.setLimitPage(25)
})

Then('a quantidade de voos por página é modificada', () => {
    cy.get('tbody > tr')
        .should('have.length', 25)
})

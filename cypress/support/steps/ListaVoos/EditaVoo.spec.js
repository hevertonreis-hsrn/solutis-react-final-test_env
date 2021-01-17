import FlightsListPage from '../../pageObjects/flightsListPage'
import AddFlightPage from '../../pageObjects/addFlightPage'
const fligthsPage = new FlightsListPage
const addFlightPage = new AddFlightPage

When ('tento editar voo de id {string}', id => {
    fligthsPage.editFlightId(id)
})

And ('modifico o horário do checkin de saída para {string}', horario => {
    addFlightPage.setDepartureCheckin(horario)
})

And ('envio as informações', () => {
    addFlightPage.submit()
})

Then ('o horário do checkin de saída do voo {string} é modificada para {string}', (id, horario) => {
    cy.get(`tbody > :nth-child(${id}) > :nth-child(10)`)
        .invoke('text')
        .should('eq', horario)
})
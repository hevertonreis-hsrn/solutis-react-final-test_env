import FlightsListPage from '../../pageObjects/flightsListPage'
import AddFlightPage from '../../pageObjects/addFlightPage'
const fligthsPage = new FlightsListPage
const addFlightPage = new AddFlightPage

When ('tento editar voo de id {string}', id => {
    fligthsPage.editFlightId(id)
})

And ('modifico o horário saída para {string}', horario => {
    addFlightPage.setDepartureTime(horario)
})

And ('envio as informações', () => {
    addFlightPage.submit()
})

Then ('o horário de saída do voo {string} é modificada para {string}', (id, horario) => {
    cy.get(`:nth-child(${id}) > :nth-child(9)`)
        .invoke('text')
        .should('eq', horario)
})
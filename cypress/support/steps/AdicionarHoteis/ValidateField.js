And('tentar adicionar {string} no campo {string}', (info,field) => {
    cy.wait(1000)
    cy.get(`#${field}`)
    .clear()
    .type(info)
})

Then('o envio não é permitido', () => {
	cy.url()
    .should('be.equal','http://localhost:3000/hotels/create')
})

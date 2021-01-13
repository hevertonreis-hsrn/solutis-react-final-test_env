Given('o acesso ao sistema', () => {
	cy.visit(Cypress.config("baseUrl"))
})

And('o acesso à {string}', (section) => {
    cy.fixture('secoes.json')
        .then(secList => {
            console.log(secList)
            cy.visit(secList[section])
        })
})
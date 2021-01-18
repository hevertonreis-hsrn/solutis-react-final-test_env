And('tentar adicionar {string} no campo {string}', (info,field) => {
    cy.get(`#${field}`)
    .clear()
    .type(info)
})
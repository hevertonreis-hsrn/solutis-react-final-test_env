And('tentar adicionar {string} no campo {string}', (info,field) => {
    cy.typeCheck(`#${field}`,info)
})
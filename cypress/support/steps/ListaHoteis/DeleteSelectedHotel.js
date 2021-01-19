
And('selecionar um hotel da lista', () => {
    cy.get('tbody > :nth-child(1) > :nth-child(4)')
    .invoke('text')
    .as('hotelName')
    cy.get('tbody > :nth-child(1) > :nth-child(1) > .form-check > .form-check-input')
    .click()
})

When('tentar excluir um hotel selecionado', () => {
    cy.get('.border > .btn-danger')
    .click()
})

Then('o hotel selecionado foi excluido da lista', () => {
    cy.get('@hotelName')
    .then(res => {
        cy.get('tbody > tr')
        .should('not.contain',res)
    })
})

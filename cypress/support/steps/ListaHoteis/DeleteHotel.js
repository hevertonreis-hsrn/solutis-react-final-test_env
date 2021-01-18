
When('tentar excluir um hotel da lista diretamente', () => {
    cy.get('tbody > :nth-child(1) > :nth-child(4)')
    .invoke('text')
    .as('hotelName')
    cy.get('tbody > :nth-child(1) > :nth-child(12) > .btn-danger').click()
    cy.on('window:confirm', (str) => {
        expect(str).to.equal('Are you sure?')
    })
})

Then('o hotel foi excluido da lista', () => {
    cy.get('@hotelName')
    .then( res => {
        cy.get('tr')
        .contains(res)
        .should('not.exist')
    })
    cy.on('window:alert', (str) => {
        expect(str).to.equal('This hotel has been successfully deleted')
    })
})
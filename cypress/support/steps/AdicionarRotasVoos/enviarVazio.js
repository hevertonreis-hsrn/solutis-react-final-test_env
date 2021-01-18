And('não prencha nenhuma informação', () => {
    cy.get('#adultsPrice').should('contain', '') 
    cy.get('#description-textarea').should('contain', '') 
})

Then('é requirido o preenchimento da seção preço adulto', () => {
    cy.get('#adultsPrice').then(($input) => {
        expect($input[0].validationMessage).to.eq('Preencha este campo.')
    })
})
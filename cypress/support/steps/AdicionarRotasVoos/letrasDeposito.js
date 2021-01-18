And('forneço as informações de chegada', (dataTable) => {
    dataTable.hashes().forEach(elem =>{
        cy.get(':nth-child(2) > :nth-child(4) > .form-control').clear().type(elem.numVoo)
        cy.get(':nth-child(2) > :nth-child(5) > #flight-date').type(elem.data)
        cy.get(':nth-child(2) > :nth-child(6) > #flight-checkin').type(elem.checkin)
        cy.get(':nth-child(2) > :nth-child(7) > #flight-checkout').type(elem.checkout)
    })
})
And('fornecer as configurações principais', (dataTable) => {
    dataTable.hashes().forEach(elem =>{
        cy.get('#vatTax').type(elem.taxa)
        cy.get('#deposite').type(elem.deposito)
    })
})
Then('é requerido o preenchimento correto do deposito', () => {
    cy.get('#deposite').then(($input) => {
        expect($input[0].validationMessage).to.eq('É preciso que o formato corresponda ao exigido.')
    })
})
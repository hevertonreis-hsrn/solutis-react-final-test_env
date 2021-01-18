When('acrescento a transição', () => {
    cy.get('#connection-manager-form > .btn').click({force:true})
}) 

And('fornecer informações de partida', (dataTable) => {
    dataTable.hashes().forEach(elem =>{
        cy.get(':nth-child(1) > :nth-child(4) > .form-control').clear().type(elem.numVoo)
        cy.get(':nth-child(1) > :nth-child(5) > #flight-date').type(elem.data)
        cy.get(':nth-child(1) > :nth-child(6) > #flight-checkin').type(elem.checkin)
        cy.get(':nth-child(1) > :nth-child(7) > #flight-checkout').type(elem.checkout)
    })
})

And('forneço as informações da transição', (dataTable) => {
    dataTable.hashes().forEach(elem =>{
        cy.get(':nth-child(2) > :nth-child(4) > .form-control').clear().type(elem.numVoo)
        cy.get(':nth-child(2) > :nth-child(5) > #flight-date').type(elem.data)
        cy.get(':nth-child(2) > :nth-child(6) > #flight-checkin').type(elem.checkin)
        cy.get(':nth-child(2) > :nth-child(7) > #flight-checkout').type(elem.checkout)
    })
})

And('fornecer informações de chegada', (dataTable) => {
    dataTable.hashes().forEach(elem =>{
        cy.get(':nth-child(3) > :nth-child(4) > .form-control').clear().type(elem.numVoo)
        cy.get(':nth-child(3) > :nth-child(5) > #flight-date').type(elem.data)
        cy.get(':nth-child(3) > :nth-child(6) > #flight-checkin').type(elem.checkin)
        cy.get(':nth-child(3) > :nth-child(7) > #flight-checkout').type(elem.checkout)
    })
})

And('forneço configurações principais', (dataTable) => {
    dataTable.hashes().forEach(elem =>{
        cy.get('#vatTax').type(elem.taxa)
    })
})
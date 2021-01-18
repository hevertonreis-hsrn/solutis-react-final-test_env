And('fornecer os preços de cada categoria', (dataTable) => {
    dataTable.hashes().forEach(elem =>{
        cy.get('#adultsPrice').clear().type(elem.adulto)
        cy.get('#childPrice').clear().type(elem.criança) 
        cy.get('#infantPrice').clear().type(elem.infantil)
    })
})

And('fornecer as informações de partida', (dataTable) => {
    dataTable.hashes().forEach(elem =>{
        cy.get('#departureAirport').select(elem.aerop)
        cy.get('#departureAirline').select(elem.comp)
        cy.get('#connection-manager-form > table > tbody > tr:nth-child(1) > td:nth-child(4) > input').clear().type(elem.numVoo)
        cy.get(':nth-child(1) > :nth-child(5) > #flight-date').type(elem.data)
        cy.get(':nth-child(1) > :nth-child(6) > #flight-checkin').type(elem.checkin)
        cy.get(':nth-child(1) > :nth-child(7) > #flight-checkout').type(elem.checkout) 
    })
})

And('fornecer as informações de chegada', (dataTable) => {
    dataTable.hashes().forEach(elem =>{
        cy.get('#arrivalAirport').select(elem.aerop)
        cy.get('#arrivalAirline').select(elem.comp)
        cy.get('#connection-manager-form > table > tbody > tr:nth-child(2) > td:nth-child(4) > input').clear().type(elem.numVoo)
        cy.get(':nth-child(2) > :nth-child(5) > #flight-date').type(elem.data)
        cy.get(':nth-child(2) > :nth-child(6) > #flight-checkin').type(elem.checkin)
        cy.get(':nth-child(2) > :nth-child(7) > #flight-checkout').type(elem.checkout) 
    })
})

And('fornecer a descrição', (dataTable) => {
    dataTable.hashes().forEach(elem =>{
        cy.get('#description-textarea').type(elem.descrição)
    })
})

And('forneço as configurações principais', (dataTable) => {
    dataTable.hashes().forEach(elem =>{
        cy.get('#status').select(elem.status) 
        cy.get('#vatTax').type(elem.taxa)
        cy.get('#deposite').type(elem.deposito)
        cy.get('#flightType').select(elem.tipoVoo)
        cy.get('#refundable').select(elem.reembolso)
        cy.get('#direction').select(elem.direção)
    })
})

When('envio a adição do voo', () => {
    cy.get('.btn-primary').click({force:true})
})

Then('a rota foi adicionada a lista', () => {
    cy.wait(3000)
    cy.on('window:alert', mensagem => {
        expect(mensagem).to.be.equal('Sua rota aérea foi criada!')
    })
})




When('alterar a exibição para {string} itens', qtd => {
    cy.get('.btn-group')
    .contains(qtd)
    .click()
    .invoke('text')
    .as('itemQtd')
    cy.wait(1000)
})

Then('os itens são exibidos', () => {
    cy.get('tbody > tr')
    .then(res => {
        cy.get('@itemQtd')
        .then(qtd => {
            if(qtd != 'All') {
                expect(res.length.toString()).to.equal(qtd)
            } else {
                expect(res.length).to.be.at.least(100)
            }
        })
    })
})


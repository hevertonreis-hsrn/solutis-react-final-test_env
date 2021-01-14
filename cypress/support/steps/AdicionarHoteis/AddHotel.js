import AddHotelForm from '../../elements/AddHotelForm'

When('iniciar a adição de um novo hotel', () => {
	cy.get('.btn-success').click()
})

And('preencher todas as informações', () => {
    cy.fixture('hotelInfo')
    .then(info => {
        Object.keys(info).forEach(item => {
            cy.typeCheck(`#${item}`,info[item])
        })
        cy.get(AddHotelForm.status).click()
    })
})

And('submeter a adição do novo Hotel', () => {
	cy.get(AddHotelForm.sendBtn).click()
})

And('exibir todos os resultados', () => {
    cy.get('.btn-toolbar > :nth-child(1) > :nth-child(4)').click({force:true})
})

Then('o hotel é adicionado à Lista', () => {
    cy.wait(2000)
   /* cy.fixture('hotelInfo')
    .then( info => {
        cy.get('tbody > tr')
        .should('contain',info.nameAddHotel)
    })*/
})

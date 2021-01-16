import AddHotelClass from '../../pageObjects/AddHotelClass'
const AddHotel = new AddHotelClass

When('iniciar a adição de um novo hotel', () => {
	cy.get('.btn-success').click()
})

And('preencher todas as informações', () => {
    AddHotel.infoType('hotelInfo','valid')
})

And('submeter a adição do novo hotel', () => {
	AddHotel.formSend()
})

And('exibir todos os resultados', () => {
    cy.get('.btn-toolbar > :nth-child(1) > :nth-child(4)').click({force:true})
})

Then('o hotel é adicionado à Lista', () => {
    cy.fixture('hotelInfo')
    .then( info => {
        cy.get('tbody > tr')
        .should('contain',info[0].nameAddHotel)
    })
})

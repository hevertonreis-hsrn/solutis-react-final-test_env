import AddHotelClass from '../../pageObjects/AddHotelClass'
const AddHotel = new AddHotelClass

When('iniciar a edição de um hotel', () => {
	cy.get(':nth-child(1) > :nth-child(12) > .btn-warning').click()
})

And('realizar alterações nas informações', () => {
	AddHotel.infoType('hotelInfo','edit')
})

And('submeter as alterações', () => {
	AddHotel.formSend()
})

Then('as alterações foram persistidas', () => {
    cy.fixture('hotelInfo')
    .then( info => {
        cy.get('tbody > :nth-child(1)')
        .should('contain', info[3].namehotelInfo)
    })
})

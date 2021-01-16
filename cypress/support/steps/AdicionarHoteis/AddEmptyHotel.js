import AddHotelClass from '../../pageObjects/AddHotelClass'
const AddHotel = new AddHotelClass

And('e não preencher todas as informações', () => {
    AddHotel.infoType('hotelInfo','empty')
})

Then('o envio não é permitido', () => {
    cy.url()
    .should('be.equal','http://localhost:3000/hotels/create')
})

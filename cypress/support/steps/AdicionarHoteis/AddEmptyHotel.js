import AddHotelClass from '../../pageObjects/AddHotelClass'
const AddHotel = new AddHotelClass

And('e não preencher todas as informações', () => {
    AddHotel.infoType('hotelInfo','empty')
})

Then('o envio não deve ser permitido', () => {
    cy.wait('@formIntercept').should(({request,response}) => {
        expect(request.body.name).to.not.be.empty
    })
})

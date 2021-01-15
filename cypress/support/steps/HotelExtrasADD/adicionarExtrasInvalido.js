import HotelExtrasAddPO from '../../pageobjects/HotelExtrasAddPO'

const hotelExtrasAdd = new HotelExtrasAddPO

Then('confirmo a operação e tento voltar ao menu', () => {
	hotelExtrasAdd.saveAndReturn()
});

And('aparece uma mensagem de erro', () => {
	hotelExtrasAdd.invalidInput()
});
import HotelExtrasHomePO from '../../pageobjects/HotelExtrasHomePO'

const hotelExtrasHomePO = new HotelExtrasHomePO;

And('acesso a visualização do extra', () => {
	hotelExtrasHomePO.lupa()
});

Then('confiro se as informações {string}, {string} e {string}', (nome,status,preco) => {
	cy.get('#root > div > div > div.card-body > div > div:nth-child(3) > input:nth-child(1)').should('contain', nome)
	cy.get('#root > div > div > div.card-body > div > div:nth-child(3) > input:nth-child(2)').should('contain', status)
	cy.get('#root > div > div > div.card-body > div > div:nth-child(3) > input:nth-child(3)').should('contain', preco)
});

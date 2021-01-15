import HotelExtrasAddPO from '../../pageobjects/HotelExtrasAddPO'

const hotelExtrasAdd = new HotelExtrasAddPO

And('acesso a pagina de criação de extras', () => {
	hotelExtrasAdd.adicionarExtra()
});

When('preencho a imagem com {string}', (imagem) => {
    hotelExtrasAdd.adicionarImagem(imagem)
});

And('preencho o nome com {string}', (nome) => {
	hotelExtrasAdd.adicionarNome(nome)
});

And('preencho o status com {string}', (status) => {
	hotelExtrasAdd.adicionarStatus(status)
});

And('preencho o preco com {string}', (preco) => {
	hotelExtrasAdd.adicionarPreco(preco)
});

Then('confirmo a operação e volto ao menu', () => {
	hotelExtrasAdd.saveAndReturn()
});

And('o hotel {string} é adicionado a lista', (nome) => {
	hotelExtrasAdd.elementosTabela(nome)
});
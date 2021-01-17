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

And('preencho o preco com o valor negativo {string}', (preco) => {
	hotelExtrasAdd.adicionarPreco(preco)
});

Then('confirmo a operação e volto ao menu', () => {
	hotelExtrasAdd.saveAndReturn()
});

And('o hotel com o preço {string} é adicionado a lista', (preco) => {
	hotelExtrasAdd.elementosTabela(preco)
});
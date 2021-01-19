import HotelExtrasHomePO from '../../pageobjects/HotelExtrasHomePO'

const hotelExtrasHome = new HotelExtrasHomePO

And('acesso a tradução de um extra', () => {
	hotelExtrasHome.traducao()
});

When('traduzo o nome em vietnamita do extra usando {string}', (traducaoVietnamita) => {
	hotelExtrasHome.editarTraducaoVietnamita(traducaoVietnamita)
});

And('traduzo o nome em espanhol do extra usando {string}', (traducaoEspanhol) => {
	hotelExtrasHome.editarTraducaoEspanhol(traducaoEspanhol)
});

And('traduzo o nome em alemão do extra usando {string}', (traducaoAlemao) => {
	hotelExtrasHome.editarTraducaoAlemao(traducaoAlemao)
});

Then('confirmo a operação de traduzir', () => {
	hotelExtrasHome.updateTraducao()
});
import HotelExtrasHomePO from '../../pageobjects/HotelExtrasHomePO'

const hotelExtrasHomePO = new HotelExtrasHomePO;


When('acesso a visualização do extra', () => {
	hotelExtrasHomePO.visualizacao()
});

Then('consigo ver o extra com mais detalhes', () => {
	hotelExtrasHomePO.verificarVisualizacao()
});


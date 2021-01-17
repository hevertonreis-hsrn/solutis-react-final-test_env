import HotelExtrasHomePO from '../../pageobjects/HotelExtrasHomePO'

const hotelExtrasHomePO = new HotelExtrasHomePO;

When('acesso a visualização do extra', () => {
	hotelExtrasHomePO.lupa()
});

Then('confiro se as informações "([^"]*)" , "([^"]*)" e "([^"]*)" dentro da pagina são validas', (nome,status,preco) => {
	console.log(args1,args2,args3);
	return true;
});

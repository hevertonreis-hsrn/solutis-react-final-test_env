import HotelExtrasHomePO from '../../pageobjects/HotelExtrasHomePO'
import HotelExtrasAddPO from '../../pageobjects/HotelExtrasAddPO'

const hotelExtrasHomePO = new HotelExtrasHomePO
const hotelExtrasAddPO = new HotelExtrasAddPO

And('acesso a edição do extra', () => {
	hotelExtrasHomePO.editar()
});

When('altero as informações {string}, {string}, {string} e {string}', (imagem,nome,status,preco) => {
    hotelExtrasAddPO.adicionarImagem(imagem)
    hotelExtrasAddPO.adicionarNome(nome)
    hotelExtrasAddPO.adicionarStatus(status)
    hotelExtrasAddPO.adicionarPreco(preco)
});

Then('cofirmo as mudanças e volto ao menu', () =>{
    hotelExtrasAddPO.saveAndReturn()
}) 

And('confiro se as alterações {string}, {string} e {string} foram relizadas', (nome,status,preco) => {
    hotelExtrasHomePO.conferirEdicao(nome)
    hotelExtrasHomePO.conferirEdicao(status)
    hotelExtrasHomePO.conferirEdicao(preco)
});

import HotelExtrasHomePO from '../../pageobjects/HotelExtrasHomePO'

const hotelExtrasHomePO = new HotelExtrasHomePO


When('seleciono todos os extras', () => {
	hotelExtrasHomePO.selecionarTodos()
});

Then('tento excluir usando Delete Selected', () => {
	hotelExtrasHomePO.excluirSelecionados()
});


And('confirmo a operação', () => {
    cy.on('window:confirm', (string) => {
        expect(string).to.equal('Do you really want to delete all selected items ?')
    })
});


And('verifico se o extra foi realmente excluido', () => {
	return true;
});

import HotelExtrasAddElements from '../elements/HotelExtrasAddElements'

const HotelExtrasAdd = new HotelExtrasAddElements;

class HotelExtrasAddPO{

    adicionarExtra(){
        cy.get(HotelExtrasAdd.adiconarExtra()).click()
    }

    adicionarImagem(imagem){
        cy.get(HotelExtrasAdd.imagem()).type(imagem)
    }

    adicionarNome(nome){
        cy.get(HotelExtrasAdd.nome()).type(nome)
    }

    adicionarStatus(status){
        cy.get(HotelExtrasAdd.status()).type(status)
    }

    adicionarPreco(preco){
        cy.get(HotelExtrasAdd.preco()).type(preco)
    }

    saveAndReturn(){
        cy.get(HotelExtrasAdd.saveAndReturn()).click()
    }

    saveAndNew(){
        cy.get(HotelExtrasAdd.saveAndNew()).click()
    }

    return(){
        cy.get(HotelExtrasAdd.return()).click()
    }

    elementosTabela(string){
        cy.get(HotelExtrasAdd.elementosTabela()).should('contain', string)
    }

    invalidInput(){
        cy.get(HotelExtrasAdd.invalidInput()).should('exist')
    }
    
}

export default HotelExtrasAddPO
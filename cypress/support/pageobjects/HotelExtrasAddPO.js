import HotelExtrasAddElements from '../elements/HotelExtrasAddElements'

const HotelExtrasAdd = new HotelExtrasAddElements;

class HotelExtrasAddPO{

    adicionarExtra(){
        cy.get(HotelExtrasAdd.adiconarExtra()).click()
    }

    adicionarImagem(imagem){
        cy.get(HotelExtrasAdd.imagem()).clear().type(imagem)
    }

    adicionarNome(nome){
        cy.get(HotelExtrasAdd.nome()).clear().type(nome)
    }

    adicionarStatus(status){
        cy.get(HotelExtrasAdd.status()).select(status)
    }

    adicionarPreco(preco){
        cy.get(HotelExtrasAdd.preco()).clear().type(preco)
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

    conferirAdicao(string){
        cy.get(HotelExtrasAdd.conferirAdicao()).should('contain', string)
    }

    invalidInput(){
        cy.get(HotelExtrasAdd.invalidInput()).should('exist')
    }
    
}

export default HotelExtrasAddPO
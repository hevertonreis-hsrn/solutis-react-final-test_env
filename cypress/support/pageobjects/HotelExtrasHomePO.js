import HotelExtrasHomeElements from '../elements/HotelExtrasHomeElements'

const HotelExtras = new HotelExtrasHomeElements

class HotelExtrasHomePO{

    selecionarTodos(){
        cy.get(HotelExtras.selecionarTodos()).click()
        cy.wait(1000)
    }

    traducao(){
        cy.get(HotelExtras.traducao()).click()
        cy.wait(1000)
    }

    editarTraducaoVietnamita(string){
        cy.xpath(HotelExtras.editarTraducaoVietnamita()).clear().type(string)
    }

    editarTraducaoEspanhol(string){
        cy.xpath(HotelExtras.editarTraducaoEspanhol()).clear().type(string)
    }

    editarTraducaoAlemao(string){
        cy.xpath(HotelExtras.editarTraducaoAlemao()).clear().type(string)
    }

    updateTraducao(){
        cy.get(HotelExtras.updateTraducao()).click()
        cy.wait(1000)
    }
  
    lupa(){
        cy.get(HotelExtras.lupa()).click()
        cy.wait(1000)
    }

    editar(){
        cy.get(HotelExtras.editar()).click()
        cy.wait(1000)
    }

    conferirEdicao(string){
        cy.get(HotelExtras.conferirEdicao()).should('contain', string)
    }

    excluir(){
        cy.get(HotelExtras.excluir()).click()
        cy.wait(1000)
    }

    excluirSelecionados(){
        cy.get(HotelExtras.excluirSelecionados()).click({ force: true })
        cy.wait(1000)
    }

    verificarExcluirTodos(){
        cy.get(HotelExtras.verificarExcluirTodos()).should('not.exist')
    }
    
}

export default HotelExtrasHomePO
import HotelExtrasHomeElements from '../elements/HotelExtrasHomeElements'

const HotelExtras = new HotelExtrasElements

class HotelExtrasPO{

    selecionarTodos(){
        cy.get(HotelExtras.selecionarTodos()).click()
        cy.wait(1000)
    }

    deletarSelecionados(){
        cy.get(HotelExtras.deletarSelecionados()).click()
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

    deletar(){
        cy.get(HotelExtras.deletar()).click()
        cy.wait(1000)
    }
    
}

export default HotelExtrasHomePO
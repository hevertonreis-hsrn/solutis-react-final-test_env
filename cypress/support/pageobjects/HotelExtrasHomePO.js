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
        cy.get(HotelExtras.editarTraducaoVietnamita()).clear().type(string)
    }

    editarTraducaoEspanhol(string){
        cy.get(HotelExtras.editarTraducaoEspanhol()).clear().type(string)
    }

    editarTraducaoAlemao(string){
        cy.get(HotelExtras.editarTraducaoAlemao()).clear().type(string)
    }

    updateTraducao(){
        cy.get(HotelExtras.updateTraducao()).click()
        cy.wait(1000)
    }
  
    visualizacao(){
        cy.get(HotelExtras.visualizacao()).click()
    }

    verificarVisualizacao(){
        cy.url().should('contain', 1)
    }

    editar(){
        cy.get(HotelExtras.editar()).click()
        cy.wait(1000)
    }

    verificarEdicao(string){
        cy.get(HotelExtras.verificarEdicao()).should('contain', string)
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
import HotelExtrasElements from '../elements/HotelExtrasElements'

const HotelExtras = new HotelExtrasElements

class HotelExtrasPO{

    selecionarTodos(){
        cy.get(HotelExtras.selecionarTodos()).click()
    }

    deletarSelecionados(){
        cy.get(HotelExtras.deletarSelecionados()).click()
    }

    traducao(){
        cy.get(HotelExtras.traducao()).click()
    }

    lupa(){
        cy.get(HotelExtras.lupa()).click()
    }

    editar(){
        cy.get(HotelExtras.editar()).click()
    }

    deletar(){
        cy.get(HotelExtras.deletar()).click()
    }
    
}

export default HotelExtrasPO
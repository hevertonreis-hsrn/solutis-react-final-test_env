import FlightsListElements from '../elements/flightsListElements'
const fligthElements = new FlightsListElements

class FlightsListPage{

    addFlightClick(){
        cy.get(fligthElements.addFlightBtn())
            .click({force:true})
    }
    getTable(){
        return cy.get(fligthElements.tableElement())
    }
    detailFlightId(id){
        cy.get(fligthElements.detailsBtn()+id)
            .click({force:true})
    }
    editFlightId(id){
        cy.get(fligthElements.editBtn()+id)
            .click({force:true})
    }
    getDeleteBtnId(id){
        cy.wait(1000)
            .get('th')
            .contains(id)
            .siblings('.d-flex')
            .children()
            .last()
            .click()
    }
    goToPage(number){
        cy.get(fligthElements.pageBtn()).contains(number)
            .click({force:true})
    }
    nextPage(){
        cy.get(fligthElements.pageBtn()).contains('Next')
            .click({force:true})
    }
    prevPage(){
        cy.get(fligthElements.pageBtn()).contains('Prev')
            .click({force:true})
    }
    setLimitPage(limit){
        cy.get(fligthElements.limitPageBtn()).contains(limit)
            .click({force:true})
    }

}

export default FlightsListPage
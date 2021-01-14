import AddFligthElements from '../elements/addFlightElements'
const addFlightElements = new AddFligthElements

class addFlightPage{


    setDepartureTime(time){
        cy.get(addFlightElements.departureTime())
            .clear()
            .type(time)
    }
    submit(){
        cy.get(addFlightElements.submitBtn())
            .click({force: true})
    }
}

export default addFlightPage
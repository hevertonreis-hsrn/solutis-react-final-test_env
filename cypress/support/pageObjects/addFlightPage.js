import AddFligthElements from '../elements/addFlightElements'
const addFlightElements = new AddFligthElements

class addFlightPage{

    setAdultPrice(price){
        cy.get(addFlightElements.adultsPriceField()).type(price)
    }
    setChildPrice(price){
        cy.get(addFlightElements.childPriceField()).type(price)
    }
    setInfantPrice(price){
        cy.get(addFlightElements.infantPriceField()).type(price)
    }
    setDepartureDate(data){
        cy.get(addFlightElements.departureDate()).type(data)
    }
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
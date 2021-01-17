import AddFligthElements from '../elements/addFlightElements'
const addFlightElements = new AddFligthElements

class addFlightPage{

    setAdultPrice(price){
        cy.typeCheck(addFlightElements.adultsPriceField(), price)
    }
    setChildPrice(price){
        cy.typeCheck(addFlightElements.childPriceField(), price)
    }
    setInfantPrice(price){
        cy.typeCheck(addFlightElements.infantPriceField(), price)
    }
    setDepartureAirport(airport){
        cy.get(addFlightElements.departureAirportSelect())
            .select(airport)
    }
    setDepartureAirline(airline){
        cy.get(addFlightElements.departureAirlineSelect())
            .select(airline)
    }
    setDepartureDate(data){
        cy.typeCheck(addFlightElements.departureDate(), data)
    }
    setDepartureCheckin(time){
        cy.typeCheck(addFlightElements.departureCheckin(), time)
    }
    setDepartureCheckout(checkout){
        cy.typeCheck(addFlightElements.departureCheckout(), checkout)
    }
    setArrivalAirport(airport){
        cy.get(addFlightElements.arrivalAirportSelect())
            .select(airport)
    }
    setArrivalAirline(airline){
        cy.get(addFlightElements.arrivalAirlineSelect())
            .select(airline)
    }
    setArrivalFlightNum(num){
        cy.get(addFlightElements.arrival())
            .parent()
            .siblings()
            .eq(2)
            .children()
            .type(num, {force: true})
    }
    setArrivalDate(data){
        cy.get(addFlightElements.arrival())
            .parent()
            .siblings()
            .eq(3)
            .children()
            .type(data, {force: true})
    }
    setArrivalCheckin(time){
        cy.get(addFlightElements.arrival())
            .parent()
            .siblings()
            .eq(4)
            .children()
            .type(time, {force: true})
    }
    setArrivalCheckout(checkout){
        cy.get(addFlightElements.arrival())
            .parent()
            .siblings()
            .eq(5)
            .children()
            .type(checkout, {force: true})
    }
    submit(){
        cy.get(addFlightElements.submitBtn())
            .click({force: true})
    }
}

export default addFlightPage
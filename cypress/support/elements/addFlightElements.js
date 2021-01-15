class AddFligthElements{

    statusSelect = () => {return '#status'}
    totalHoursField = () => {return '#totalHours'}
    vatTaxField = () => {return '#vatTax'}
    depositeField = () => {return '#deposite'}
    fligthTypeSelect = () => {return '#flightType'}
    refundableSelect = () => {return '#refundable'}
    directionSelect = () => {return '#direction'}
    adultsPriceField = () => {return '#adultsPrice'}
    childPriceField = () => {return '#childPrice'}
    infantPriceField = () => {return '#infantPrice'}
    departureAirportSelect = () => {return '#departureAirport'}
    departureAirlineSelect = () => {return '#departureAirline'}
    departureDate = () => {return ':nth-child(1) > :nth-child(5) > #flight-date'}
    departureTime = () => {return ':nth-child(1) > :nth-child(6) > #flight-time'}
    departureCheckout = () => {return ':nth-child(1) > :nth-child(7) > #flight-checkout'}
    arrival = () => {return '[placeholder="Arrival"]'}
    arrivalAirportSelect = () => {return '#arrivalAirport'}
    arrivalAirlineSelect = () => {return '#arrivalAirline'}
    addTransitBtn = () => {return '#connection-manager-form > .btn'}
    submitBtn = () => {return '.btn-primary'}

}

export default AddFligthElements
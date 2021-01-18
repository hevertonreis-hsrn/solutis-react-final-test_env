import AddHotelForm from '../elements/AddHotelForm'

class AddHotelClass {

    infoType(fixName,val) {
        return cy.fixture(fixName)
                .then(list => {
                    list.map((info) => {
                        if(info.type == val){
                            Object.keys(info).forEach(item => {
                                if(item != 'type'){
                                    cy.typeCheck(`#${item}`,info[item])
                                }                                
                            })
                        }
                    })
                    
                    cy.get(AddHotelForm.status).click()
                })
    }

    formSend(){
        return cy.get(AddHotelForm.sendBtn).click()
    }
}

export default AddHotelClass
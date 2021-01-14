
And('e não preencher todas as informações', () => {
	cy.fixture('emptyHotelInfo')
    .then(info => {
        Object.keys(info).forEach(item => {
            cy.typeCheck(`#${item}`,info[item])
        })
    })
})

Then('o envio não é permitido', () => {
	
})

import HotelList from '../../elements/HotelList'

And('editar a Ordem para {string} e o Desconto para {string} a partir da lista', (val1,val2) => {
    cy.get(HotelList.order).clear().type(val1).invoke('val').as('order')
    cy.get(HotelList.discount).clear().type(val2).invoke('val').as('discount')
})

When('tentar renovar a lista', () => {
	cy.reload()
})

Then('as alterações destes campos foram persistidas', () => {
    cy.get('@order')
    .then(res => {
        cy.get(HotelList.order).invoke('val').should('contain',res)
    })
    cy.get('@discount')
    .then(res => {
        cy.get(HotelList.discount).invoke('val').should('contain',res)
    })
})

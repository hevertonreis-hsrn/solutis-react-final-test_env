Then('é requerido o preenchimento correto do preço', () => {
  cy.get('#childPrice').then(($input) => {
     expect($input[0].validationMessage).to.eq('É preciso que o formato corresponda ao exigido.')
  })
})
When('forneço a taxa com {string}', (taxa) => {
   cy.get('#vatTax').type(taxa)
}) 
Then('é requerido o preenchimento correto da taxa', () => {
    cy.get('#vatTax').then(($input) => {
       expect($input[0].validationMessage).to.eq('É preciso que o formato corresponda ao exigido.')
    })
  })
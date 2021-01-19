When('fornecer o número do voo com {string}',(voo) => {
    cy.get(':nth-child(1) > :nth-child(4) > .form-control').clear().type(voo)
})

Then('é requerido o preenchimento correto do número do voo', () => {
    cy.get(':nth-child(1) > :nth-child(4) > .form-control').then(($input) => {
        expect($input[0].validationMessage).to.eq('É preciso que o formato corresponda ao exigido.')
    })
})
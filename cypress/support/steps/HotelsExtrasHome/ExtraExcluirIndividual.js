When("tento excluir um extra", () => {
	cy.get(':nth-child(6) > .modify-buttons > .d-flex > .btn-danger').click()
});

Then("confirmo a operação", () => {
    cy.on('window:confirm', (mensagem) => {
        expect(mensagem).to.equal('Do you really want to delete this item ?');
    })
    cy.on('window:confirm', () => true);
});

And('veirifico se o extra foi realmente excluido', () => {
    cy.on('window:alert', (mensagem) => {
        expect(mensagem).to.equal('Item removed with success');
    })
});

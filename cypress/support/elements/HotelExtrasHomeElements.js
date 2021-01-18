class HotelExtrasHomeElements{
    traducao = () => { return ':nth-child(1) > :nth-child(7) > .btn'}
    editarTraducaoVietnamita = () => { return '//*[@id="extra5"]/div/div/div[2]/form/div[1]/div/input'}
    editarTraducaoEspanhol = () => { return '//*[@id="extra5"]/div/div/div[2]/form/div[2]/div/input'}
    editarTraducaoAlemao = () => { return '//*[@id="extra5"]/div/div/div[2]/form/div[3]/div/input'}
    updateTraducao = () => { return '#extra5 > .modal-dialog > .modal-content > .modal-footer > .btn-primary'}
    verificarTraducaoVietnamita = () => { return '#extra5 > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1) > .col-md-8 > .form-control'}
    verificarTraducaoEspanhol = () => { return '#extra5 > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > .col-md-8 > .form-control'}
    verificarTraducaoAlemao = () => { return '#extra5 > .modal-dialog > .modal-content > .modal-body > form > :nth-child(3) > .col-md-8 > .form-control'}

    lupa = () => { return ':nth-child(1) > .modify-buttons > .d-flex > .btn-info'}
    lupaNameBox = () => { return '[placeholder="Name*:  Royal Hotel"]'}
    lupaNameBox = () => { return '[placeholder="Name*:  Royal Hotel"]'}
    lupaNameBox = () => { return '[placeholder="Name*:  Royal Hotel"]'}
    
    editar = () => { return '#root > div.container.mt-5 > div > div.card-body > div > div > table > tbody > tr:nth-child(5) > td.modify-buttons > div > a.btn.btn-warning.btn-sm.mx-1'}
    conferirEdicao = () => { return '.col-md-12'}

    excluir = () => { return '#root > div.container.mt-5 > div > div.card-body > div > div > table > tbody > tr:nth-child(6) > td.modify-buttons > div > button'}
    selecionarTodos = () => { return '#selectAll'}
    excluirSelecionados = () => { return '#root > div.container.mt-5 > div > div.card-body > div > div > div.border.border-muted.rounded.d-flex.justify-content-between.mb-4.bg-light.p-3 > button'}
    verificarExcluirTodos = () => { return '#root > div.container.mt-5 > div > div.card-body > div > div > table > tbody > tr:nth-child(1)'}
}

export default HotelExtrasHomeElements
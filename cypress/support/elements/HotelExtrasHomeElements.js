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
    
    editar = () => { return '.btn btn-warning btn-sm mx-1'}
    deletar = () => { return '.btn btn-danger btn-sm mx-1 mt-0'}
    selecionarTodos = () => { return '//*[@id="root"]/div/div/div/table/thead/tr/th[1]/div/input'}
    deletarSelecionados = () => { return '.btn btn-danger'}
}

export default HotelExtrasHomeElements
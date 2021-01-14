Feature: teste

    COMO pessoa comum
    DESEJO visualizar a lista de voos
    PARA planejar minha viagem

    Background: Acesso ao sistema e seção
        Given o acesso ao sistema
        And o acesso à 'Flights'
    #É possível visualizar voos
    #É possível mudar a página da lista
    #É possível mudar a quantidade de item por página 
    Scenario: Visualizando voos
        Then é possível visualizar a lista de voos

    Scenario: Mudando página da lista
        When é mudado de página da lista de voos
        Then a página é mudada
    Scenario: Mudando quantidade de item por página
        When mudo a quantidade de voos por página
        Then a quantidade de voos por página é modificada
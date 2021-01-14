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
    #É possível visualizar voo específico
    #É possível adicionar voo
    #É possível editar voo
    #É possível deletar voo
    Scenario: Visualizando voos
        Then é possível visualizar a lista de voos

    Scenario: Mudando página da lista
        When é mudado de página da lista de voos
        Then a página é mudada

    Scenario: Mudando quantidade de item por página
        When mudo a quantidade de voos por página
        Then a quantidade de voos por página é modificada

    Scenario Outline: Visualizando voo específico
        When tento visualizar voo de id "<id>"
        Then visualizo o voo de id "<id>"
        Examples:
            | id  |
            | 10  |
    Scenario Outline: Editando voo específico
        When tento editar voo de id "<id>"
        And modifico o horário saída para "<horario>"
        And envio as informações
        Then o horário de saída do voo "<id>" é modificada para "<horario>"
        Examples:
            | id  | horario | 
            | 10  | 12:00   |

    Scenario Outline: Excluindo voo
        When tento excluir voo de id "<id>"
        Then  o voo de id "<id>" é excluído
        Examples:
            | id  |
            | 3   |
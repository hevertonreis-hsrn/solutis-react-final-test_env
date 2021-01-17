Feature: Lista de Voos

    COMO pessoa comum
    DESEJO visualizar a lista de voos
    PARA planejar minha viagem

    Background: Acesso ao sistema e seção
        Given o acesso ao sistema
        And o acesso à 'Flights'

    #É possível visualizar voos

    Scenario: Visualizando voos
        Then é possível visualizar a lista de voos

    #É possível mudar a página da lista

    Scenario: Mudando página da lista
        When é mudado de página da lista de voos
        Then a página é mudada

    #É possível mudar a quantidade de item por página 

    Scenario: Mudando quantidade de item por página
        When mudo a quantidade de voos por página
        Then a quantidade de voos por página é modificada

    #É possível visualizar voo específico

    Scenario Outline: Visualizando voo específico
        When tento visualizar voo de id "<id>"
        Then visualizo o voo de id "<id>"
        Examples:
            | id  |
            | 10  |

    #É possível editar voo
    Scenario Outline: Editando voo específico
        When tento editar voo de id "<id>"
        And modifico o horário do checkin de saída para "<horario>"
        And envio as informações
        Then o horário do checkin de saída do voo "<id>" é modificada para "<horario>"
        Examples:
            | id  | horario | 
            | 6   | 12:00   |

    #É possível deletar voo

    Scenario Outline: Excluindo voo
        When tento excluir voo de id "<id>"
        Then  o voo de id "<id>" é excluído
        Examples:
            | id  |
            | 3   |

    Scenario Outline: Excluindo voos selecionados
        When seleciono voos de id "<id1>" e "<id2>"
        And tento excluir os voos selecionados
        Then os voos de id "<id1>" e "<id2>" são excluídos
        Examples:
            | id1  | id2  |
            | 9    | 10   |
Feature: Lista de Hotéis

    COMO vendedor de uma Agência de Turismo
    DESEJO gerenciar a lista de Hotéis parceiros
    PARA que possa oferecer os melhores pacotes aos clientes

    Background: acesso ao Sitema
        Given o acesso ao sistema
        And o acesso à "Hotels"

    Scenario: Editando um Hotel
        When iniciar a edição de um hotel
        And realizar alterações nas informações
        And submeter as alterações
        Then as alterações foram persistidas
    @focus
    Scenario: Excluindo um Hotel da Lista diretamente
        When tentar excluir um hotel da lista diretamente
        Then o hotel foi excluido da lista

    Scenario: Excluindo um Hotel a partir da seleção
        And selecionar um hotel da lista
        When tentar excluir um hotel selecionado
        Then o hotel foi excluido da lista

    Scenario: Editando informações a partir da lista
        And editar a Ordem e o Desconto a partir da lista
        When tentar renovar a lista
        Then as alterações destes campos foram persistidas

    Scenario Outline: Navegando entre as paginações
        When alterar a exibição para "<qtd>" itens
        Then os itens são exibidos
        Examples:
            | qtd |
            | 25  |
            | 50  |
            | 100 |
            | All |
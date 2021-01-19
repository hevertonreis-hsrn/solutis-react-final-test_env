Feature: Lista de Hotéis

    COMO vendedor de uma Agência de Turismo
    DESEJO gerenciar a lista de Hotéis parceiros
    PARA que possa oferecer os melhores pacotes aos clientes

    Background: acesso ao Sitema
        Given o acesso ao sistema
        And o acesso à "Hotels"

    #RN01: É possível excluir permanentemente um hotel da lista
    #      de maneira direta
    Scenario: Excluindo um Hotel da Lista diretamente
        When tentar excluir um hotel da lista diretamente
        Then o hotel foi excluido da lista
    
    #RN02: É possível excluir permanentemente um hotel da lista
    #      selecionando-o primeiro
    Scenario: Excluindo um Hotel a partir da seleção
        And selecionar um hotel da lista
        When tentar excluir um hotel selecionado
        Then o hotel selecionado foi excluido da lista
    
    #RN03: É possível exibir itens em diferentes quantidades
    Scenario Outline: Navegando entre as exibições
        When alterar a exibição para "<qtd>" itens
        Then os itens são exibidos
        Examples:
            | qtd |
            | 25  |
            | 50  |
            | 100 |
            | All |
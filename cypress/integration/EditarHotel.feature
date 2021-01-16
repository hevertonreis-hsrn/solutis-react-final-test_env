Feature: Lista de Hotéis

    COMO vendedor de uma Agência de Turismo
    DESEJO editar um Hotel na lista de Hotéis parceiros
    PARA que possa manter a oferta de serviços atualizada

    Background: acesso ao Sitema
        Given o acesso ao sistema
        And o acesso à "Hotels"
    
    #RN01: É possível editar um hotel da lista
    Scenario: Editando um Hotel
        When iniciar a edição de um hotel
        And realizar alterações nas informações
        And submeter as alterações
        Then as alterações foram persistidas
    
    #RN02: Não deve ser possível adicionar informações inválidas na edição
    Scenario Outline: Editando um Hotel com informações inválidas
        When iniciar a edição de um hotel
        And tentar adicionar "<info>" no campo "<field>"
        And submeter as alterações
        Then o envio não é permitido
        Examples:
            | field             | info                                                                            |
            | urlhotelInfo      | isto NÃO É uma url                                                              |
            | namehotelInfo     | !!!!!!!!!!!!!!!!!!!!!Este texto tem mais de 50 caracteres!!!!!!!!!!!!!!!!!!!!!! |                   
            | starhotelInfo     | 7                                                                               |
            | starhotelInfo     | 0                                                                               |
            | ownedByhotelInfo  | !!!!!!!!!!!!!!!!!!!!!Este texto tem mais de 50 caracteres!!!!!!!!!!!!!!!!!!!!!! |
            | locationhotelInfo | -1                                                                              |
            | orderhotelInfo    | -1                                                                              |
            | discounthotelInfo | 100                                                                             |

    #RN03: Deve ser possível editar a Ordem e o Desconto a qualquer momento a partir da Lista
    Scenario: Editando informações a partir da lista
        And editar a Ordem para "30" e o Desconto para "50" a partir da lista
        When tentar renovar a lista
        Then as alterações destes campos foram persistidas
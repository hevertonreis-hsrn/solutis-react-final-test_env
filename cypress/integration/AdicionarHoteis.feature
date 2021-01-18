Feature: Lista de Hotéis

    COMO vendedor de uma Agência de Turismo
    DESEJO adicionar um hotel a lista de Hotéis parceiros
    PARA que possa ampliar a ofererta de pacotes aos clientes

    Background: acesso ao Sitema
        Given o acesso ao sistema
        And o acesso à "Hotels"

    #RN01: É possível adicionar um novo hotel à Lista   
    Scenario: Adicionando um Hotel à Lista
        When iniciar a adição de um novo hotel
        And preencher todas as informações
        And submeter a adição do novo hotel
        And exibir todos os resultados
        Then o hotel é adicionado à Lista

    #RN02: Não deve ser possível adicionar um elemento vazio à lista
    #RN02.1: Campos Nome do Hotel, Localização e Imagem são obrigatórios  
    Scenario: Adicionando um Hotel à Lista sem fornecer todas as informações
        When iniciar a adição de um novo hotel
        And e não preencher todas as informações
        And submeter a adição do novo hotel
        Then o envio não deve ser permitido
    
    #RN03: Todos os campos devem possuir validações
    #RN03.1: Campo Imagem só pode admitir URLs
    #RN03.2: Campos de Texto não podem exceder 50 caracteres
    #RN03.3: Campo de Estrelas não pode aceitar valores mais altos que 5 e mais baixos que 1
    #RN03.3: Campos de Ordem e Desconto não podem aceitar valores negativos
    #RN03.4: Campo desconto não pode aceitar valores maiores que 80
    Scenario Outline: Verificando validações nos campos
        When iniciar a adição de um novo hotel
        And tentar adicionar "<info>" no campo "<field>"
        And submeter a adição do novo hotel
        Then o envio não é permitido
        Examples:
            | field            | info                                                                            |
            | urlAddHotel      | isto NÃO É uma url                                                              |
            | nameAddHotel     | !!!!!!!!!!!!!!!!!!!!!Este texto tem mais de 50 caracteres!!!!!!!!!!!!!!!!!!!!!! |                   
            | starAddHotel     | 7                                                                               |
            | starAddHotel     | 0                                                                               |
            | ownedByAddHotel  | !!!!!!!!!!!!!!!!!!!!!Este texto tem mais de 50 caracteres!!!!!!!!!!!!!!!!!!!!!! |
            | orderAddHotel    | -1                                                                              |
            | discountAddHotel | -1                                                                              |
            | discountAddHotel | 100                                                                             |
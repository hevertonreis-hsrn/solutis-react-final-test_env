Feature: Lista de Hotéis

    COMO vendedor de uma Agência de Turismo
    DESEJO adicionar um hotel a lista de Hotéis parceiros
    PARA que possa ampliar a ofererta de pacotes aos clientes

    Background: acesso ao Sitema
        Given o acesso ao sistema
        And o acesso à "Hotels"

    Scenario: Adicionando um Hotel à Lista
        When iniciar a adição de um novo hotel
        And preencher todas as informações
        And submeter a adição do novo Hotel
        And exibir todos os resultados
        Then o hotel é adicionado à Lista
    @focus
    Scenario: Adicionando um Hotel à Lista sem fornecer todas as informações
        When iniciar a adição de um novo hotel
        And e não preencher todas as informações
        And submeter a adição do novo Hotel
        And exibir todos os resultados
        Then o envio não é permitido

    Scenario: Verificando validações nos campos
        When iniciar a adição de um novo hotel
        And tentar adicionar uma url inválida para imagem
        And textos com mais de 50 caracteres
        And fornecer menos que 1 e mais do que 5 estrelas ao hotel
        And descontos menores do que 1
        Then o envio não é permitidoS
Feature: Hotel Extras Home Page

    COMO administrador do site
    DESEJO ter controle sobre os hotéis
    PARA organizar minha tabela

    
    Background: acesso ao Sitema
        Given o acesso ao sistema
        And o acesso à "Hotel extra"

    
    Scenario Outline: Usando a funcionalidade Translate
        When acesso a tradução de um extra
        And traduzo o nome em vietnamita do extra usando "<vietnamita>"
        And traduzo o nome em espanhol do extra usando "<espanhol>"
        And traduzo o nome em alemão do extra usando "<alemao>"
        Then confirmo a operação
        Examples:
            | vietnamita          | espanhol   | alemao      |
            | khách sạn Hoàng Gia | Hotel real | Royal Hotel |

    @focus
    Scenario Outline: Usando a funcionalidade Visualizar
        When acesso a visualização do extra
        Then confiro se as informações "<nome>" , "<status>" e "<preco>" dentro da pagina são validas
        Examples:
            | nome        | status | preco |
            | Royal Hotel | Yes    | 1200  |


    Scenario Outline: Usando a funcionalidade Editar
        When acesso a visualização do extra
        Then altero as informações "<imagem >", "<nome>", "<status>" e "<preco>"
        Examples:
            | imagem                                                                                        | nome         | status | preco    |
            | https://cdn.britannica.com/85/171185-050-135771D4/Burj-Khalifa-Dubai-United-Arab-Emirates.jpg | Burj Khalifa | No     | 99999999 |


    Scenario: Usando a funcionalidade Excluir
        When acesso a visualização do extra
        Then tento excluir um extra
        And veirifico se o extra foi realmente excluido

    Scenario: Usando a funcionalidade Excluir Selecionados
        When seleciono todos os extras
        Then tento excluir usando excluir selecionados
        And veirifico se o extra foi realmente excluido
    
           

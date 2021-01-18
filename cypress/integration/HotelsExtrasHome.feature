Feature: Hotel Extras Home Page

    COMO administrador do site
    DESEJO ter controle sobre os hotéis
    PARA organizar minha tabela
    
    Background: acesso ao Sitema
        Given o acesso ao sistema
        And o acesso à "Hotel extra"
        
    #RN01: É possível usar a funcionalidade Traduzir Extra
    Scenario Outline: Traduzir o nome de um extra
        And acesso a tradução de um extra
        When traduzo o nome em vietnamita do extra usando "<vietnamita>"
        And traduzo o nome em espanhol do extra usando "<espanhol>"
        And traduzo o nome em alemão do extra usando "<alemao>"
        Then confirmo a operação
        Examples:
            | vietnamita          | espanhol   | alemao      |
            | khách sạn Hoàng Gia | Hotel real | Royal Hotel |

    @focus
    #RN02: É possível usar a funcionalidade Visualizar Extra
    Scenario: Visualizar um extra
        When acesso a visualização do extra
        Then consigo ver o extra com mais detalhes

    #RN03: É possível usar a funcionalidade Editar Extra
    Scenario Outline: Editar um extra
        And acesso a edição do extra
        When altero as informações "<imagem>", "<nome>", "<status>" e "<preco>"
        Then cofirmo as mudanças e volto ao menu
        And confiro se as alterações "<nome>", "<status>" e "<preco>" foram relizadas
        Examples:
            | imagem                                                                                        | nome         | status | preco    |
            | https://cdn.britannica.com/85/171185-050-135771D4/Burj-Khalifa-Dubai-United-Arab-Emirates.jpg | Burj Khalifa | No     | 9999     |

    #RN04: É possível usar a funcionalidade Excluir Extra
    Scenario: Excluir um extra individualmente
        When tento excluir um extra
        Then confirmo a operação
        And veirifico se o extra foi realmente excluido

    #RN05: É possível usar a funcionalidade Excluir tods os Extras selecionados
    Scenario: Excluir todos os extras selecionados
        When seleciono todos os extras
        And tento excluir usando Delete Selected
        Then confirmo a operação
        And verifico se o extra foi realmente excluido
    
           

Feature: Hotel Extras Home Page

    COMO administrador do site
    DESEJO ter controle sobre os hotéis
    PARA organizar minha tabela

    
    Background: acesso ao Sitema
        Given o acesso ao sistema
        And o acesso à "Hotel extra"

    #RN: É possivel atribuir uma tradução ao nome do extra
    Scenario Outline: Usando a funcionalidade Translate
        And acesso a tradução de um extra
        When traduzo o nome em vietnamita do extra usando "<vietnamita>"
        And traduzo o nome em espanhol do extra usando "<espanhol>"
        And traduzo o nome em alemão do extra usando "<alemao>"
        Then confirmo a operação
        Examples:
            | vietnamita          | espanhol   | alemao      |
            | khách sạn Hoàng Gia | Hotel real | Royal Hotel |

    
    Scenario Outline: Usando a funcionalidade Visualizar
        And acesso a visualização do extra
        Then confiro se as informações "<nome>", "<status>" e "<preco>"
        Examples:
            | nome        | status | preco |
            | Royal Hotel | Yes    | 1200  |

    
    Scenario Outline: Usando a funcionalidade Editar
        And acesso a edição do extra
        When altero as informações "<imagem>", "<nome>", "<status>" e "<preco>"
        Then cofirmo as mudanças e volto ao menu
        And confiro se as alterações "<nome>", "<status>" e "<preco>" foram relizadas
        Examples:
            | imagem                                                                                        | nome         | status | preco    |
            | https://cdn.britannica.com/85/171185-050-135771D4/Burj-Khalifa-Dubai-United-Arab-Emirates.jpg | Burj Khalifa | No     | 9999     |

    @focus
    Scenario: Usando a funcionalidade Excluir Individual
        When tento excluir um extra
        Then confirmo a operação
        And veirifico se o extra foi realmente excluido


    Scenario: Usando a funcionalidade Excluir Selecionados
        When seleciono todos os extras
        Then tento excluir usando Delete Selected
        And confirmo a operação
        And verifico se o extra foi realmente excluido
    
           

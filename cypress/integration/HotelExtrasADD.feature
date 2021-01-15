Feature: Adicionar Extras em hoteis

    COMO administrador do site
    DESEJO adicionar um extra em hotéis
    PARA vender um produto extra

    Background: acesso ao Sitema
        Given o acesso ao sistema
        And o acesso à "Hotel extra"

    
    Scenario Outline: Criar um Extra em hotels
        And acesso a pagina de criação de extras
        When preencho a imagem com "<imagem>"
        And preencho o nome com "<nome>"
        And preencho o status com "<status>"
        And preencho o preco com "<preco>"
        Then confirmo a operação e volto ao menu
        And o hotel "<nome>" é adicionado a lista
        Examples:
            | nome        | status | preco |  imagem                                                                                                                |
            | Vila Gale   | Sim    | 2220  | https://magazine.zarpo.com.br/wp-content/uploads/2018/10/conheca-os-9-hoteis-e-resorts-da-rede-vila-gale-no-brasil.jpg |
            | Hotel Paris | Nao    | 1500  | https://elysees-paris-hotel.com/_novaimg/4394833-1366277_200_0_1917_1533_1000_800.jpg                                  |

    @focus
    Scenario Outline: Criar um Extra inválido em hotels
        And acesso a pagina de criação de extras
        When preencho a imagem com "<imagem>"
        And preencho o status com "<status>"
        And preencho o preco com "<preco>"
        Then confirmo a operação e tento voltar ao menu
        And aparece uma mensagem de erro
        Examples:
            | nome        | status | preco |  imagem                                                                                                                |
            | Vila Gale   | Sim    | 2220  | https://magazine.zarpo.com.br/wp-content/uploads/2018/10/conheca-os-9-hoteis-e-resorts-da-rede-vila-gale-no-brasil.jpg |
            | Hotel Paris | Nao    | 1500  | https://elysees-paris-hotel.com/_novaimg/4394833-1366277_200_0_1917_1533_1000_800.jpg                                  |


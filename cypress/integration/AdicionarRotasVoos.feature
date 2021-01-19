Feature: Adicionar rotas de voos 

    COMO gerente do Hotel XYZ
    DESEJO adicionar as rotas de voos disponíveis
    PARA manter meus hospedes atualizados

    Background: acesso ao Sitema
        Given o acesso ao sistema
        And o acesso à "Flights"
        And o acesso à "AddFlights"

#RN: É possível adicionar uma rota de voo 
    Scenario: Adicionar rota de voo
        And fornecer os preços de cada categoria 
            | adulto | criança | infantil |
            | 300    | 230     | 180      |
        And fornecer as informações de partida 
            | aerop        | comp | numVoo | data       | checkin | checkout |
            | citycode 317 | Azul | 4567   | 2021-02-01 | 12:20   | 14:00    |
        And fornecer as informações de chegada 
            | aerop        | comp  | numVoo  | data       | checkin | checkout |
            | citycode 318 | GOL   | 8756    | 2021-02-16 | 06:00   | 07:20    |
        And fornecer a descrição 
            | descrição                                                      |
            | Cada passageiro pode levar até 5Kg de bagagem + bagagem de mão |
        And forneço as configurações principais 
            | status  | taxa | deposito | tipoVoo  | reembolso  | direção |
            | Enabled | 4    | 130,00   | Economic | Refundable | Return  |
        When envio a adição do voo
        Then a rota foi adicionada a lista 

#RN: Não é possível adicionar um voo com os campos obrigatórios vazios 
    Scenario: Adicionar sem preencher informações
        And não prencha nenhuma informação
        When envio a adição do voo
        Then é requirido o preenchimento da seção preço adulto

#RN: É possível acrescentar uma transição na rota de voo  
    Scenario: Acrescentar transição
        When acrescento a transição
        And fornecer os preços de cada categoria 
            | adulto | criança | infantil |
            | 450    | 340     | 250      |
        And fornecer informações de partida  
            | numVoo | data       | checkin  | checkout |
            | 0497   | 2021-01-17 | 13:00    |  15:00   |
        And forneço as informações da transição
            | numVoo | data       | checkin | checkout |
            | 3950   | 2021-01-18 | 22:00   | 23:30    |
        And fornecer informações de chegada
            | numVoo | data       | checkin | checkout |
            | 7856   | 2021-01-19 | 12:40   | 14:00    |
        And fornecer a descrição 
            | descrição                                     |
            | Cada passageiro pode levar até 4Kg de bagagem |
        And forneço configurações principais 
            | taxa |
            | 8    |
        And envio a adição do voo
        Then a rota foi adicionada a lista 

#RN: O número de voo não aceita letras ou mais de 4 caracteres númericos 
    Scenario Outline: Número de voo 
        And fornecer os preços de cada categoria 
            | adulto | criança | infantil |
            | 150    | 100     | 50       |
            | 150    | 100     | 50       |
        When fornecer o número do voo com "<numVoo>"
        And envio a adição do voo
        Then é requerido o preenchimento correto do número do voo
        Examples:
            | numVoo |
            | 12345  |
            | 123aD  |

#RN: A seção price não aceita letra 
    Scenario: Letras no price
        When fornecer os preços de cada categoria 
            | adulto | criança | infantil |
            | 1000   | 50b     | 250      |
        And envio a adição do voo
        Then é requerido o preenchimento correto do preço

#RN: A seção deposite não aceita letra 
    Scenario: Letras no deposito
         And fornecer os preços de cada categoria  
            | adulto | criança | infantil |
            | 1000   | 500     | 250      | 
        And fornecer informações de partida  
            | numVoo | data       | checkin | checkout |
            | 0497   | 2021-02-01 | 09:30   | 10:40    |
        And forneço as informações de chegada
            | numVoo | data       | checkin | checkout |
            | 7856   | 2021-02-01 | 12:00   | 13:30    |
        And fornecer a descrição 
            | descrição                                                                                             |
            | Cada passageiro pode levar até 6Kg de bagagem + bagagem de mão. Tem direito a um sanduíche com bebida |
        When fornecer as configurações principais 
            | taxa | deposito |
            | 15   | Débito   |   
        And envio a adição do voo
        Then é requerido o preenchimento correto do deposito

#RN: A seção taxa não aceita valores menores que 0 e maiores 100 
    Scenario Outline: Valor da taxa
         And fornecer os preços de cada categoria  
            | adulto | criança | infantil |
            | 3000   | 2500     | 2000    | 
        And fornecer informações de partida  
            | numVoo | data       | checkin | checkout |
            | 0796   | 2021-03-01 | 08:40   | 10:20    |
        And forneço as informações de chegada
            | numVoo | data       | checkin | checkout |
            | 3496   | 2021-03-02 | 11:00   | 13:00    |
        And fornecer a descrição 
            | descrição                                                                                                       |
            | Cada passageiro pode levar até 8Kg de bagagem + 2 bagagens de mão. Tem direito a um almoço, sanduíche e bebidas |
        When forneço a taxa com "<taxa>"   
        And envio a adição do voo
        Then é requerido o preenchimento correto da taxa
        Examples:
            | taxa  | 
            | -20   | 
            | 150   | 


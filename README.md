# :pencil2: Arquitetura Flux + Redux :computer:

## Problema:

A arquitetura Flux foi criada para solucionar o problema de distribuir os dados da aplicação para todos os componentes, ou 
então fazer com que os componentes enviem algum dado ou ação para que outro componente responda. Isso sem contar que cada componente pode guardar seus próprios dados. Caso um dado esteja presente em vários componentes diferentes você vai ter um certo trabalho para garantir que ele esteja sempre atualizado em todos os lugares, evitando inconsistências.

## Solução:

A solução para esse problema foca em colocar todos os dados da aplicação em um único lugar, assim todos os componentes possuem um lugar comum que contém as informações/dados e permite a comunicação entre eles.

Dessa maneira só precisamos alterar nossos dados em um único lugar, garantindo que todos os componentes da aplicação sempre estarão com o mesmo dado.

### Arquitetura Flux

![ArqFlux](./README/arquitetura-do-flux.png.png)
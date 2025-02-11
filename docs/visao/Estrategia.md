# Estratégia de Engenharia de Software

## Estratégia priorizada

**Abordagem de Desenvolvimento de Software:** Dirigido a Plano

**Ciclo de vida:** Sequencial

**Processo de Engenharia de Software:** Cascata

## Quadro comparativo

| **Característica**        | **Cascata**                                                                                            | **OpenUP**                                                                                    |
| ------------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Foco                      | Sequência linear de fases                                            | Processo iterativo e incremental com foco na colaboração e feedback contínuo.                 |
| Equipe                    | Estruturada e hierárquica, com papéis bem definidos                                                                           | Equipes especializadas e com papeis mais bem definidos                                        |
| Ciclos de desenvolvimento | Lineares e sequenciais, sem retorno às fases anteriores                          | Ciclo estruturado e formal, com controle de riscos, priorizando a qualidade e a estabilidade. |
| Envolvimento do cliente   | Limitado, pouca participação pelo desenvolvimento | Igualmente contínuo porém mais estruturado e com revisões formais.                            |
| Flexibilidade             | Baixa flexibilidade, com mudanças raras durante o projeto                                     | Flexível, porém mais limitado em relação às fases de desenvolvimento.                         |

## Justificativa

Depois da troca constante entre processos de desenvolvimento de software, nos estabelecemos no Cascata, pois é um modelo que inconscientemente todos da equipe seguiram no decorrer do projeto.

## Utilização do Processo em Cascata

Adotaremos o modelo de desenvolvimento em cascata, que seguirá uma sequência linear de fases bem definidas, onde cada etapa deve ser concluída antes do início da próxima. O foco será na documentação detalhada, no planejamento rigoroso e em entregas somente ao final do ciclo de desenvolvimento.

Levantamento e Análise de Requisitos: Nesta fase inicial, realizaremos a coleta detalhada de requisitos com o cliente, por meio de entrevistas e análise de documentos. O objetivo é definir claramente as necessidades do projeto, com um escopo bem estabelecido para evitar mudanças ao longo do desenvolvimento.

Design do Sistema: Com os requisitos definidos, passaremos para a elaboração da arquitetura do sistema. Inclui o design de alto e baixo nível, diagramas de arquitetura, modelagem de dados e a definição das tecnologias que serão utilizadas.

Implementação (Codificação): Nesta etapa, o desenvolvimento do software será realizado de acordo com o design previamente definido. A codificação seguirá os padrões estabelecidos na fase anterior, com foco na entrega de um produto funcional completo.

Testes e Validação: Após a implementação, serão realizados testes rigorosos para identificar e corrigir erros. Inclui testes de unidade, integração, sistema e aceitação, garantindo que o software atenda aos requisitos definidos.

Implantação: O software será entregue e implantado no ambiente de produção do cliente. Esta fase inclui atividades de configuração do ambiente, migração de dados (se necessário) e treinamento de usuários.

Manutenção: Após a entrega, serão realizadas correções de erros identificados em produção e ajustes necessários. A manutenção também pode incluir melhorias evolutivas, desde que aprovadas e planejadas adequadamente.

Envolvimento do Cliente: O cliente participará principalmente nas fases de levantamento de requisitos e na validação final do produto, com envolvimento limitado durante o desenvolvimento. O foco estará na entrega de um software completo ao final do ciclo.

## ~~Utilização do processo OpenUP~~

~~Nossa divisão de iterações será de acordo com o OpenUP e a partir dele focaremos bastante nas respostas e avaliações do professor Bruno Ribas para prosseguir com o desenvolvimento numa microescala. Também ocorrerá reuniões informais com o cliente para fazer alinhamentos sobre cada incremento que será entregue. Optamos por incorporar o OpenUP (na estrutura de Inception, Elaboration, Construction e Transition) na nossa estratégia de desenvolvimento de software da seguinte forma:~~

~~**Inception** e **Elaboração**: definição inicial do projeto. Assim como a elicitação e descoberta de requisitos com o cliente, também aplicamos a técnica de brainstorming sobre os problemas e soluções propostas entre o time, além de estabelecermos o documento de visão do produto e posteriormente a análise, consenso e declaração dos requisitos, assim como épicos, temas e histórias de usuário.~~

 ~~**Construção** e **Transição**: construção do software propriamente dito. Codificação, testagem e validação do produto com cliente. Aplicaremos técnicas como DoR (Definition of Ready) e DoD (Definition of Done) para fazer validações com o cliente e entre o time a respeito de requisitos e incrementos de software.~~
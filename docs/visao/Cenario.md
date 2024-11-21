# Cenário atual do Cliente e do Negócio

## Introdução ao negócio e contexto

O "CD-MOJ - Contest Driven Meta Online Judge" é um online judge, cujo foco está na realização de contests. Atualmente o sistema é utilizado majoritariamente por professores da Universidade de Brasília - Campus Gama, para a realização de listas de exercícios e provas, além do site em si a plataforma conta com um bot no telegram nomeado de "Mojinho" com o qual é possível extrair os logs e o código de uma submissão.

A plataforma tem como público alvo desenvolvedores e programadores no geral em busca de resolver problemas computacionais, mais especificamente problemas relacionados a algoritmos, estruturas de dados, sistemas operacionais, arquitetura de computadores e planejamento.

O sistema é atualmente mantido pelo professor Bruno César Ribas em colaboração com alunos da Universidade de Brasília - Campus Gama.

## Identificação da oportunidade ou problema

Em meio à insatisfação dos usuários com a plataforma de submissão de código, identificou-se vários pontos de melhoria no ecossistema do MOJ. Após discussão entre membros da equipe, análise de enquetes de semestres passados em relação ao MOJ e ideias do professor mantenedor da plataforma, identificamos os seguintes problemas:

1. **Não é possível recuperar arquivos anteriormente submetidos à plataforma diretamente pela mesma:** ao fazer um submit para um contest, o arquivo com o código enviado só pode ser recuperado através do Mojinho. Como o MOJ é uma plataforma focada no aprendizado, convém que o estudante possa analisar posteriormente o que foi enviado à plataforma sem tanta fricção.

1. **Não é possível verificar com mais detalhes os casos de teste que falharam na sua submissão:** novamente, o MOJ dá feedback limitado sobre submissões do usuário que tiveram falhas e erros no envio de um exercício, e convém que haja atenção a esse aspecto para um melhor aprendizado dos estudantes.

1. **Os participantes de um contest não tem um lugar centralizado para a discussão:** do problema e seus detalhes com a turma: normalmente a comunicação entre alunos e monitores/ajudantes ocorre no WhatsApp e similares.

1. O usuário da plataforma precisa de um editor de texto ou IDE para escrever o código o qual fará o submit, o que faz com que seja necessário alternar entre diferentes janelas para desenvolver uma solução na plataforma.

1. **Ausência de uma IDE (Integrated development environment):** o usuário precisa sair da plataforma para desenvolver o código, alternando entre diversas janelas, aumentando a fricção ao se utilizar a plataforma.

1. **As listas não possuem uma organização de fácil digestão pela user base:** alguns notaram a falta de um sistema de pesquisa no site para ser possível encontrar diferentes exercícios.

1. **Necessidade de atualização manual da página para obter o veredito da questão:** Após a submissão de um código, o usuário precisa recarregar a página repetidamente para visualizar o veredito do exercício. A automatização desse processo poderia melhorar a experiência do usuário.

O **diagrama de Ishikawa** a seguir apresenta a relação de causa e efeito dos problemas mencionados.

<iframe frameborder="0" style="width:100%;height:1087px;" src="https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Ishikawa.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1VoB8x6kYtdlWgaWsdw_P5z6ERA_5mkL_%26export%3Ddownload"></iframe>

Em resumo, os problemas do CD-MOJ são "a ausência de funcionalidades essenciais e limitações na experiência do usuário".

## Desafios do Projeto

Através de diálogos com o cliente e mantedor da plataforma foi evidenciado que:

"A dificuldade em aprimorar a plataforma é o conhecimento na área de desenvolvimento web moderno e falta de mão de obra para implementar as novas funcionalidades".

## Segmentação de clientes

**Professores(as) de instituições acadêmicas:**

Este perfil abrange educadores de faculdades e escolas técnicas que utilizam o CD-MOJ no ensino de suas disciplinas.

- Possuem mestrado ou doutorado em Ciência da Computação ou áreas afins.
- Homens e mulheres.
- Faixa etária entre 25 e 42 anos.

**Estudantes de nível superior ou técnico**:

Alunos das disciplinas ministradas pelo perfil **"professores de instituições acadêmicas"** ou estudantes de programação no geral que buscam aprimorar suas habilidades de codificação.

- Pouco ou nenhum contato com programação previamente
- Homens e mulheres.
- Faixa etária entre 18 e 30 anos.

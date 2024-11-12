# Cenário atual do Cliente e do Negócio

## Introdução ao negócio e contexto

O "CD-MOJ - Contest Driven Meta Online Judge" é um online judge, cujo foco está na realização de contests. Atualmente o sistema é utilizado majoritariamente por professores da Universidade de Brasília - Campus Gama, para a realização de listas de exercícios e provas, além do site em si a plataforma conta com um bot no telegram nomeado de "Mojinho" com o qual é possível extrair os logs e o código de uma submissão.

A plataforma tem como público alvo desenvolvedores e programadores no geral em busca de resolver problemas computacionais, mais especificamente problemas relacionados a algoritmos, estruturas de dados, sistemas operacionais, arquitetura de computadores e planejamento.

O sistema é atualmente mantido pelo professor Bruno César Ribas em colaboração com alunos da Universidade de Brasília - Campus Gama.

## Identificação da oportunidade ou problema

Em meio à insatisfação dos usuários com a plataforma de submissão de código, identificou-se vários pontos de melhoria no ecossistema do MOJ. Após discussão entre membros da equipe, análise de enquetes de semestres passados em relação ao MOJ e ideias do professor mantenedor da plataforma, identificamos os seguintes problemas: 

1. Não é possível recuperar arquivos anteriormente submetidos à plataforma diretamente pela mesma: ao fazer um submit para um contest, o arquivo com o código enviado só pode ser recuperado através do Mojinho. Como o MOJ é uma plataforma focada no aprendizado, convém que o estudante possa analisar posteriormente o que foi enviado à plataforma sem tanta fricção. 

2. Não é possível verificar com mais detalhes os casos de teste que falharam na sua submissão: novamente, o MOJ dá feedback limitado sobre submissões do usuário que tiveram falhas e erros no envio de um exercício, e convém que haja atenção a esse aspecto para um melhor aprendizado dos estudantes. 

3. Há a necessidade de sair do site para ter alguns arquivos de log: o "Mojinho" existe unicamente na plataforma Telegram, dificultando o acesso ao usuário final. 

4. O participante do contest não tem um lugar centralizado para a discussão do problema e seus detalhes com a turma: normalmente a comunicação entre alunos e monitores/ajudantes ocorre no WhatsApp e similares.  

5. O usuário da plataforma precisa de um editor de texto ou IDE para escrever o código o qual fará o submit, o que faz com que seja necessário alternar entre diferentes janelas para desenvolver uma solução na plataforma. 

6. As listas não possuem uma organização de fácil digestão pela user base: alguns notaram a falta de um sistema de pesquisa no site para ser possível encontrar diferentes exercícios. 

Além disso, problemas que aumentam a fricção e prejudicam a usabilidade na plataforma, como a falta de atualização em tempo real do status dos submits dentro de um contest e a falta de polimento na interface gráfica da plataforma (como botões pequenos e não identificáveis, assim como a carência de um "dark/night mode") foram outros pontos levantados após discussões. 
 
## Desafios do Projeto

Através de diálogos com o cliente e mantedor da plataforma foi evidenciado que:

"A dificuldade em aprimorar a plataforma é o conhecimento na área de desenvolvimento web moderno e falta de mão de obra para implementar as novas funcionalidades".


## Segmentação de clientes

**Instituições educacionais e departamentos acadêmicos**: Este perfil inclui as universidades, faculdades e escolas técnicas que adotam o CD-MOJ em disciplinas de programação. Assim, a plataforma ajuda essas instituições a oferecer uma infraestrutura centralizada para prática de programação e competições, que complementa o ensino teórico com uma abordagem prática. Como clientes indiretos, as instituições buscam uma plataforma que possibilite a integração com as atividades curriculares e que auxilie no desenvolvimento das habilidades técnicas dos alunos.

**Estudantes de programação e computação**: Estes são alunos de cursos de Ciência da Computação, Engenharia de Software e áreas afins, com idades variando entre 18 e 25 anos, que participam de competições de programação ou precisam realizar trabalhos e exercícios de suas disciplinas na plataforma. Muitos destes estudantes têm habilidades iniciais ou intermediárias e utilizam o CD-MOJ para resolver e aprimorar a resolução de problemas, algoritmos e programação competitiva. Desta forma, para esses usuários, o sistema deve proporcionar uma experiência de tal forma que permita realizar submissões de código e acompanhar feedback de forma rápida, ajudando-os a entender e corrigir seus erros de programação com autonomia.

**Professores, tutores e organizadores de competições**: Este grupo inclui professores universitários e monitores que coordenam disciplinas de algoritmos, tais como estruturas de dados e programação avançada, bem como organizadores de eventos e competições de programação dentro de suas instituições. Assim, tendo responsabilidades de acompanhamento e avaliação, esses profissionais precisam de ferramentas que permitam criar listas de exercícios, organizar competições, gerenciar alunos e acessar relatórios de desempenho. Portanto, para eles, o CD-MOJ deve oferecer uma interface com seções claras para administração e monitoramento, reduzindo o tempo gasto em tarefas operacionais e permitindo um acesso direto aos dados e resultados dos estudantes.
 



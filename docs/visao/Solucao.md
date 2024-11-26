# Solução Proposta
## Cenário Atual e Objetivos da Solução  

O **CD-MOJ** é amplamente utilizado por professores e alunos da Universidade de Brasília – Campus Gama como ferramenta para realização de exercícios, provas e contests relacionados a disciplinas como algoritmos, estruturas de dados e arquitetura de computadores. Apesar de ser funcional, o sistema enfrenta limitações que impactam a experiência do usuário e dificultam sua adoção por um público mais amplo.  

Entre os problemas identificados estão a dependência do **BOT Mojinho** no Telegram para acessar logs e códigos de submissões, a ausência de funcionalidades críticas como uma **IDE integrada** e um espaço centralizado para discussões, além de dificuldades em organizar listas e acompanhar o status das submissões em tempo real. Esses fatores criam uma experiência fragmentada, reduzindo o potencial da plataforma como um ambiente de aprendizado completo.  

Com base nesse diagnóstico, foi definido o seguinte **objetivo principal**:  
- **Integração do BOT Mojinho na plataforma do CD-MOJ:** Essa funcionalidade eliminará a necessidade de acesso externo ao Telegram para obter dados de login e envio de questões, centralizando esse processo dentro da própria plataforma. Isso visa simplificar o fluxo de trabalho e tornar a solução mais intuitiva e eficiente.  

Além disso, foram definidos **objetivos secundários** para endereçar outras limitações críticas:  
1. **Facilitar o desenvolvimento de código diretamente na plataforma:**  
   Com a implementação de uma **IDE integrada**, os participantes poderão desenvolver, testar e submeter seus códigos sem sair do CD-MOJ, eliminando a necessidade de alternar entre diferentes ferramentas e aumentando a produtividade.  

2. **Promover a troca de conhecimento e a colaboração:**  
   A criação de uma **aba de Discussão** permitirá aos usuários interagir diretamente na plataforma, fortalecendo o aprendizado colaborativo e centralizando o diálogo sobre exercícios e conceitos relacionados às disciplinas.  

Esses objetivos visam não apenas resolver as principais limitações da plataforma, mas também aprimorar a experiência do usuário, tornando o CD-MOJ mais atrativo e funcional para professores e estudantes. Ao propor soluções viáveis que utilizam tecnologias acessíveis, o projeto busca aumentar a eficiência e usabilidade da plataforma, além de consolidar o CD-MOJ como uma ferramenta diferenciada e competitiva no mercado de juízes online.  


## Características da solução
Para alcançar os objetivos estabelecidos, serão implementadas as seguintes funcionalidades:

1. **Integração do BOT Mojinho:**
   - O BOT Mojinho será diretamente incorporado à plataforma do CD-MOJ.
   - Ele permitirá que os usuários acessem, de forma ágil e eficiente, os dados necessários para realizar o login e enviar suas questões.
   - Essa integração tornará o processo mais intuitivo e eliminará etapas desnecessárias, centralizando a funcionalidade dentro da própria interface do CD-MOJ.

2. **IDE Integrada:**
   - Um ambiente de desenvolvimento integrado (IDE) será incorporado à plataforma, permitindo aos usuários desenvolverem seus códigos diretamente no CD-MOJ.
   - **Funcionalidades principais:**
     - Editor de código com suporte a linguagens como Python, Java e C++.
     - Execução de testes locais, para validar o funcionamento do código antes da submissão.
     - Submissão direta para o sistema de avaliação do CD-MOJ.
   - Essa ferramenta eliminará a dependência de softwares externos, otimizando o fluxo de trabalho dos participantes.

3. **Aba de Discussão:**
   - Uma nova seção será criada para reunir os usuários em um espaço de diálogo e colaboração.
   - **Principais recursos:**
     - Discussões sobre estratégias para resolver exercícios.
     - Debates sobre conceitos acadêmicos em disciplinas como algoritmos e estrutura de dados.
     - Resolução coletiva de dúvidas e troca de experiências entre os participantes.
   - A aba será moderada para garantir um ambiente organizado e produtivo.


## Tecnologias a serem utilizadas

### HTML, CSS, JavaScript

Ferramentas essencias para o desenvolvimento de aplicações web modernas, responsáveis por definir o comportamento de uma página web além de sua aparência.

### Figma

O Figma é uma ferramenta de design colaborativa online que combina funcionalidades de design e prototipagem. Devido a sua fácil utilização e possibilidade de desenvolvimento em equipe facilitará a prototipação das interfaces a serem criadas, além de ser gratuita.

## Pesquisa de mercado e análise competitiva

Atualmente os juízes onlines com o mesmo objetivo do CD-MOJ são o LeetCode, Codeforces, AtCoder, Codechef, que possuem um vasto banco de questões, contests pelo menos toda semana, elementos de gamificação como sistema de ranking similar ao xadrez, emblemas, premiações em dinheiro, merchandise, e blogs/forúns de discussão entre os usuários.

Para se diferenciar das soluções já existentes o CD-MOJ terá por foco o público universitário e estudantes.

## Análise de viabilidade

A respeito da viabilidade técnica, o projeto não aparenta apresentar grandes desafios, uma vez que existe familiaridade das tecnologias entre os membros da equipe. Visando que o projeto seja sustentável as ferramentes escolhidas são de fácil aprendizado, já que são amplamente difundidas, portanto a solução também facilita a sua própria manutenção. Por não envolver a aquisição de qualquer produto ou serviço pago adicional, o projeto também é viável financeiramente.

## Impacto da solução

Espera-se que com a recriação visual da plataforma, os usuários se sintam mais engajados em utilizá-la, e que também possa atrair novos usuários, dessa forma diminuindo a disparidade do CD-MOJ em relação aos demais juízes. Além disso a solução proposta visa facilitar a implementação de novas funcionalidades, já estabelecerá padrões visuais a serem seguidos e a documentação necessária para atrair novos contribuintes.


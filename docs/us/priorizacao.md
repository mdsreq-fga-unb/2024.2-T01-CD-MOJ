# Priorização

Considerando que o **valor de negócio** pode variar de 1 (pouco valor agregado) e 5 (muito valor agregado), e a **complexidade** variando de 1 (fácil implementação), a 5 (difícil implementação), a pontuação de uma us é dada por : $\frac{2 (\text{Valor de negócio})}{\text{Complexidade}}$.

A pontuação atribuída a cada **US** pela equipe em conjunto pode ser visualizada na tabela a seguir.

| US          | Valor de negócio | Complexidade | Total |
| ----------- | ---------------- | ------------ | ----- |
| US1 :star:  | 5                | 2            | 5     |
| US2 :star:  | 4                | 2            | 4     |
| US3 :star:  | 5                | 3            | 3.33  |
| US4 :star:  | 5                | 3            | 3.33  |
| US5         | 3                | 5            | 1.2   |
| US6 :star:  | 3                | 2            | 3     |
| US7 :star:  | 4                | 2            | 4     |
| US8         | 1                | 3            | 0.66  |
| US9         | 3                | 2            | 3     |
| US10        | 4                | 5            | 1.6   |
| US11        | 1                | 2            | 1     |
| US12        | 2                | 4            | 1     |
| US13        | 4                | 4            | 2     |
| US14        | 2                | 4            | 1     |
| US15        | 2                | 5            | 0.8   |
| US16        | 3                | 4            | 1.5   |
| US17        | 1                | 5            | 0.4   |
| US18        | 3                | 3            | 2     |
| US19        | 1                | 3            | 0.66  |
| US20        | 3                | 2            | 3     |
| US21        | 4                | 3            | 2.66  |
| US22        | 1                | 4            | 0.5   |
| US23        | 2                | 5            | 0.8   |
| US24        | 3                | 4            | 1.5   |
| US25        | 2                | 2            | 2     |
| US26 :star: | 4                | 2            | 4     |
| US27 :star: | 4                | 2            | 4     |

### Miro

<iframe src="https://miro.com/app/board/uXjVL7x-bvg=/" width="100%" height="600" frameborder="0"></iframe>

## MVP 

| **Número** | **US**  | **História de Usuário**                                       |
|------------|---------|--------------------------------------------------------------|
| 1          | US01   | Como estudante, quero visualizar um log detalhado de runtime das minhas submissões, para entender melhor por que meu código falhou ou teve sucesso. |
| 2          | US02   | Como estudante, quero poder salvar o log de runtime para futuras referências ou compartilhamento com outros usuários para que possa utilizar como aprendizado ou colaboração. |
| 3          | US26   | Como professor, quero habilitar/desabilitar o a recuperação de log de submissão pro contest, para permitir/proibir os alunos de term acesso ao recurso. |
| 4          | US27   | Como professor, quero habilitar/desabilitar o a recuperação de código de submissão pro contest, para  permitir/proibir os alunos de term acesso ao recurso. |
| 5          | US07   | Como estudante, quero customizar casos de teste do problema com o código feito na plataforma para entender melhor os problemas da plataforma. |
| 6          | US03   | Como estudante, quero recuperar o código das minhas submissões anteriores diretamente na plataforma, para poder revisar meu progresso e entender erros passados. |
| 7          | US04   | Como estudante, eu quero poder baixar o código-fonte de qualquer submissão anterior diretamente da plataforma, para que eu possa utilizá-lo para revisão e como base para novos códigos. |
| 8          | US06   | Como professor, quero ser capaz de habilitar ou desabilitar casos de teste padrão para uma lista de exercícios específica para modificar a dificuldade de resolução dos exercícios. |

## MoSCoW (Must-have, Should-have, Could-have, Won't-have)

Das histórias de usuário mencionadas na seção Backlog, em consenso com o time utilizando critérios de complexidade técnica e valor de negócio, foi feita a divisão entre cada categoria de priorização do framework MoSCoW da seguinte forma:

| Priorização | Histórias de Usuário | Sintetização das histórias |
| ----------- | ---------------- | ---- |
| Must-have   | US01, US02, US03, US04, US05, US06, US07, US26 | Funcionalidades relacionadas à visualização/persistência de logs e códigos de submissões, execução de casos de teste padrão e customizados na plataforma, assim como mecanismos de controle por parte do professor que administra a lista na plataforma. |
| Should-have | US09, US13, US16, US18, US20, US21 | Funcionalidades relacionadas à criação, edição, remoção e visualização de posts sobre exercícios no fórum, assim como controles adicionais dados a monitores de disciplinas e professores na plataforma. |
| Could-have  | US08, US11, US12, US14, US15, US19, US22 | Funcionalidades relacionadas ao compartilhamento de testes customizados pela plataforma, integração de um ambiente de desenvolvimento dentro da plataforma, melhora de organização em tópicos em uma aba 'Discussão' no MOJ, assim como controle adicional de usuários finais sobre posts feitos nessa aba. |
| Won't-have  | US23, US17 | Histórias relacionadas à interface gráfica e melhora de experiência de usuário na plataforma. |
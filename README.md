# 2024.2-T01-CD-MOJ

Repositório de projeto da disciplina de REQ-T1.

<p align="center">
  <img src="logo_moj.png" alt="Logo do Projeto" />
</p>

## Introdução

O projeto CD-MOJ tem o objetivo de aprimorar a experiência na plataforma do MOJ, online judge do professor Bruno Ribas, da FGA. A plataforma possui vários pontos de melhoria na visão de requisitos funcionais e não funcionais.

## Subindo a documentação localmente

Primeiramente é necessário possuir o [python](https://www.python.org/downloads/) instalado, então estando na raiz do projeto execute os seguintes comandos:

```sh
# Criar um ambimente virtual do python
python3 -m venv .pyenv

# "Entrar" no ambiente virtual
source ./.pyenv/bin/source

# Instalar as bibliotecas necessárias
pip3 install -r requirements.txt

# Subir a documentação
mkdocs serve
```

Com isso feito basta acessar o endereço fornecido (Ex: http://127.0.0.1:8000/).

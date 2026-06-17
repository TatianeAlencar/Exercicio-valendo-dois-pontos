PGATS - CI

Pipeline Ci de nível 01,02 e 04, com GitHub Actions

Pré-requisitos:

1. Instale o git [git](https://git-scm.com)
2. Instale o nodejs [nodejs](https://nodejs.org/)
3. Instale o Yarn - `npm install -g yarn`
   
Configuração do Ambiente

4. Faça um _Fork_ de um projeto utilizado na pós Automação de testes de Software
5. Clone o repositório para sua máquina
`git clone <URL_DO_REPOSITORIO>`
6. Acessar a pasta do projeto
cd Exercicio-valendo-dois-pontos
7. Instalar as dependências
`yarn install --frozen-lockfile`

Execução do teste

8. Execute os testes (Mocha)
`yarn test`

Relatórios

9. Será gerado relatórios e ficarão salvos em:
`mochawesome-report/`
10. O relatório também será publicado como Artifact no GitHub Actions, permitindo o download após cada execução da pipeline.

Tipos de execução da Pipeline

11. Execução Manual
-Executada através da aba Actions do GitHub
12. Execução Agendada
-Configurada através do schedule (CRON):
schedule:
 - cron: '0 0 * * *' (A pipeline será executada todo dia automativamente, á meia noite)
13. Execução por Push
-Executada  automaticamente sempre que houver um push para a branch principal (main)

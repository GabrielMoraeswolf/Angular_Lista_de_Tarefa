# Lista de Tarefas

Esta é uma aplicação web criada com React de uma lista de tarefas, nela é possível adicionar, remover ou editar as tarefas colocadas, tendo também um Status de como está essa tarefa em questão, sendo "Pendente" se ainda não foi executada, "Finalizada" ou "Cancelada".
 Podendo seu Status também ser alterado, além da alteração da própria tarefa. Suas tarefas são salvas em um banco de dados PostgreSQL e persistidos com o ORM sequelize, por meio de um código back-end em Node.JS, servindo de servidor local para a aplicação web.


## Como rodar:

### Em um terminal entre na pasta 'cd backend/' e digite o seguinte comando:

* npm run dev

Com esse comando voce dara inicio ao servidor local que estar execudando na porta localhost:3001.

### Em um outro terminal entre na pasta 'cd frontend/' e digite o seguinte comando:

* npm start

Com esse comando voce dara inicio a aplicação web que estar execudando na porta localhost:3000, sendo essa a padrão do React.

## A aplicação:

![Captura de Tela (3)](https://github.com/GabrielMoraeswolf/Lembretes/assets/58598993/27973def-c8b5-441b-b966-7db0dc58556c)

## Funcionalidades:

+ Adicionar Tarefa
+ Lista de Tarefas
+ Filtrar Tarefas
+ Editar Tarefas
+ Remover Tarefas

### Adicionar Tarefa:

![Captura de Tela (4)](https://github.com/GabrielMoraeswolf/Lembretes/assets/58598993/8bc0ee6d-17f2-4cc4-aec0-238c5a983e76)

Há um campo onde o usuário pode escrever a tarefa a ser adicionada e ela é salva ao clicar no botão "Adicionar Tarefa". Por padrão, ela é salva com o status "Pendente", porém podendo ser editada a qualquer momento.

### Lista de Tarefas:

![Captura de Tela (1)](https://github.com/GabrielMoraeswolf/Lembretes/assets/58598993/382cafc0-4359-46b7-8825-1e988aeead42)

Ao clicar no botão "Lista de Tarefas" serão exibidas todas as tarefas adicionadas e salvas no banco de dados, juntamente com o status de cada uma das mesmas.

### Filtrar Tarefas:

![Captura de Tela (6)](https://github.com/GabrielMoraeswolf/Lembretes/assets/58598993/10a57690-f6c5-4ad1-a889-72244b93afeb)

Em filtrar tarefas, você pode selecionar qual status você quer filtrar clicando no tipo de status e em seguida "Filtra Tarefas", sendo exibidas somente as tarefas com o status selecionado.
Caso queira ver novamente todas as tarefas, basta clicar em "Limpar Filtro" e serão exibidas novamente todas as tarefas.

* Pendente

![Captura de Tela (7)](https://github.com/GabrielMoraeswolf/Lembretes/assets/58598993/82d6f08f-06c2-4d31-9d35-b7b3eaee191d)
   
* Finalizada
  
![Captura de Tela (8)](https://github.com/GabrielMoraeswolf/Lembretes/assets/58598993/8000401c-b824-4b7c-b2d9-fa8356a3fdb5)
 
* Cancelada

![Captura de Tela (9)](https://github.com/GabrielMoraeswolf/Lembretes/assets/58598993/b63e68ef-97e0-478c-a294-50a21ffb9e45)

### Editar Tarefas:

![Captura de Tela (5)](https://github.com/GabrielMoraeswolf/Lembretes/assets/58598993/223c62d1-b5d5-4ab6-960c-41e486be5f80)

Ao clicar no botão "Editar", vai abrir um campo para que possa ser feita a edição da tarefa ou mudar o status dela. Clicando em "Salvar" a tarefa sera atualizada e salva no banco de dados.

### Remover Tarefa:

Um botão ao lado de "Editar", presente em todos os itens na lista que irá remover a tarefa da lista.

## Back-End e Banco de dados:

Para utilizar o sistema, você deve ter em sua máquina o PostgreSQL instalado e alterar os valores em ".env" 'DB_USERNAME' para o nome de usuário colocado e o 'DB_PASSWORD' que se refere à senha criada depois da instalação do banco de dados PostgreSQL. Os demais valores podem ser mantidos por padrão.

Pode ser baixado no link abaixo:

https://www.postgresql.org/download/

## Tecnologias usadas:

<table>
  <tr>
    <td>React </td>
    <td>Javascript</td>
    <td>Node.js</td>
    <td>PostgreSQL</td>
    <td>ORM sequelize</td>
  </tr>
</table>


## Autor:
* Gabriel Rodrigues de Moraes

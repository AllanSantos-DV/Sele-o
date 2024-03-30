# ⚽ Seleções ⚽

## Instalação

1. Clone o repositório.
2. Execute o comando `npm install` para instalar as dependências.
3. Crie o database no seu banco de dados.
4. Renomeie o arquivo `.env_example` para `.env`.
5. Configure o arquivo `.env` com as informações do seu banco de dados e servidor.

    Exemplo:
    ```java.
    # banco de dados
    DB_USER= #usuário do banco de dados
    DB_PASSWORD= #senha do banco de dados
    DB_NAME= #nome do banco de dados
    DB_HOST= #host do banco de dados
    DB_DIALECT= #dialect do banco de dados

    # servidor
    PORT= #porta do servidor

    # secret
    SESSION_SECRET= #Configure seu segredo aqui

    # ambiente
    NODE_ENV= #development (Se estiver rodando em Local manter development)
    ```

## Uso

Utilize `npm start` para iniciar a aplicação.

Acesse a aplicação através da rota: [http://localhost:3000/time](http://localhost:3000/time)

Nota: O link da rota do app sera apresentada no console apos iniciar o projeto. O exemplo acima sujere que vc estara usando a porta 3000.

## Funcionamento do App

O aplicativo de Seleções de Time e Jogadores permite a criação e gerenciamento de times e jogadores. A relação entre eles é definida da seguinte forma: um time pode ter vários jogadores, mas um jogador só pode pertencer a um único time. É possível editar os dados tanto dos times quanto dos jogadores.

### Criação de Times e Jogadores

Para criar um time, você pode utilizar a rota `/time` e enviar os dados necessários, como nome, país, técnico, etc. O time será adicionado ao banco de dados e receberá um ID único.

Da mesma forma, para criar um jogador, você pode utilizar a rota `/jogadores` e enviar os dados necessários, como nome, posição, idade, etc. O jogador também será adicionado ao banco de dados e receberá um ID único.

### Edição de Dados

Para editar os dados de um time ou de um jogador, você pode utilizar os botões de editar em times e clicar nos cards dos jogadores respectivamente. Envie os novos dados que deseja atualizar e o aplicativo irá atualizar as informações no banco de dados.

### Exclusão de Times e Jogadores

Quando um time é excluído, apenas o time em si é removido do banco de dados. Os jogadores associados a esse time permanecem intactos.

Da mesma forma, quando um jogador é excluído, apenas o jogador em si é removido do banco de dados. O time associado a esse jogador permanece intacto.

### Telas de Visualização

O aplicativo possui duas telas principais: uma que mostra todos os times cadastrados e outra que mostra todos os jogadores cadastrados. Você pode acessar essas telas através das rotas `/time` e `/jogadores`, respectivamente.

Essas são as principais funcionalidades do aplicativo de Seleções de Time e Jogadores. Se tiver alguma dúvida adicional, fique à vontade para perguntar.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para obter mais informações.

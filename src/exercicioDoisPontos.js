/*Desafio Valendo 2 Pontos na Nota Final

Pré-requisitos:
Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades:
id, nome, email, senha e expirado (boleano, pode ser true ou false). 
Adicione ao menos um dos usuarios como expirado sendo true.*/

import { error } from "node:console";
import { MessageEvent } from "node:http";

const users = [
    {
     id: 1,
     nome: 'Paula',
     email: 'paula@gmail',
     senha: 123,
     expirado: true
    },
    {
     id: 2,
     nome: 'Cris',
     email: 'cris@gmail',
     senha: 456,
     expirado: false 
    }
];
/*Desafio:
Construa uma função de para realizar login. Quem usar a função deverá receber uma mensagem dizendo que o login
foi realizado com sucesso caso exista um usuário com email e senha iguais aos informados. A função deve dizer
que as credenciais expiraram caso expirado for true. A função também tem que dizer que as credenciais estão
incorretas caso o email não exista ou a senha esteja incorreta para aquele email.

Testes:
Escreva 4 testes: 1) Sucesso, 2) Credencial expirada, 3) Usuario não encontrado e 4) Senha incorreta para o usuário
encontrado.

Exemplo:
fazerLogin('email@existente.com', 'senhaCerta123'); -> 'Login realizado com sucesso'
fazerLogin('credencial@expirada.com', 'senhaCerta123'); -> Renove suas credenciais*/


export function fazerLogin(email, senha){
    
    for (let i =0; i < users.length; i++) {

        if(users[i].email == email) {
        
             if (users[i].senha != senha) {
                 return 'Senha incorreta para o usuário encontrado'
        }
    
             if (users[i].expirado == true ){
                 return 'Renove suas credenciais'
        }

             else  {
                 return 'Login realizado com sucesso'
        }

    }
}    
            return 'Usuario não encontrado'
        
}


import { fazerLogin } from "../src/exercicioDoisPontos.js";
import assert from 'node:assert';

describe('Testando login', function (){
    it('Sucesso', function(){
        //Act
        const retornodaFuncaoLogin = fazerLogin('cris@gmail', 456);

        //Assert
        assert.equal(retornodaFuncaoLogin, 'Login realizado com sucesso')
    });

    it('Credencial expirada', function(){
        //Act
        const retornodaFuncaoLogin = fazerLogin('paula@gmail', 123);

        //Assert
        assert.equal(retornodaFuncaoLogin, 'Renove suas credenciais')
    });

    it('Usuario não encontrado', function(){
        //Act
        const retornodaFuncaoLogin = fazerLogin('ted@gmail.com', 789);

        //Assert
        assert.equal(retornodaFuncaoLogin, 'Usuario não encontrado')
    });

        it('Senha incorreta para o usuário encontrado', function(){
        //Act
        const retornodaFuncaoLogin = fazerLogin('cris@gmail', 789);

        //Assert
        assert.equal(retornodaFuncaoLogin, 'Senha incorreta para o usuário encontrado')
    });
});
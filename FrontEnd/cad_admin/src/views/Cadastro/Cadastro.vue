<template>
    <main class="main">
        <h2>Cadastro ADMIN</h2>
        <form id="form" class="form" @submit.prevent="handlerCadastro">
            <div class="campos">
                <label for="nome">Nome:</label> <br>
                <input type="text" name="nome" id="nome" placeholder="Digite o seu nome" class="inputs" v-model="nome">
            </div>
            <div class="campos">
                <label for="sobrenome">Sobrenome:</label> <br>
                <input type="text" name="sobrenome" id="sobrenome" placeholder="Digite o seu sobrenome" class="inputs"
                    v-model="sobrenome">
            </div>
            <div class="campos">
                <label for="nomeDeUsuario">Nome de Usuário:</label> <br>
                <input type="text" name="nomeDeUsuario" id="nomeDeUsuario" placeholder="Digite o seu nome de usuário"
                    class="inputs" v-model="nomeDeUsuario">
            </div>
            <div class="campos">
                <label for="senha">Senha:</label> <br>
                <input type="password" name="senha" id="senha" placeholder="Digite a sua senha" class="inputs"
                    v-model="senha">
                    <span>{{ inputError }}</span>
            </div>
            <div class="campos">
                <label for="repitaSenha">Repita a Senha:</label> <br>
                <input type="password" name="repitaSenha" id="repitaSenha" placeholder="Digite a sua senha novamente"
                    class="inputs" v-model="repitaSenha">
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    </main>
</template>

<script>
import axios from 'axios'
const url = 'http://localhost:8080/nova/conta'
export default {
    name: "Login",
    data() {
        return {
            nome: "",
            sobrenome: "",
            nomeDeUsuario: "",
            senha: "",
            repitaSenha: ""
        }
    },
    methods: {
        handlerCadastro() {
            axios.post(url, {
                nome: this.nomeDeUsuario,
                sobrenome: this.sobrenome,
                nomeDeUsuario: this.nomeDeUsuario,
                senha: this.senha,
                repitaSenha: this.repitaSenha
            }).then(function (response) {
                console.log(response.request.responseText);
            }).catch(function (error) {
                console.error(error)
                let responseText = JSON.parse(error.request.responseText)
                console.log(responseText.mensagem)
                input
            });
        }
    }
}
</script>

<style scoped>
.main{
    width: 100%;
    height: 100vh;
    background-color: rgb(28, 28, 28);
}

h2{
    color: ghostwhite;
    font-size: 30px;
    text-align: center;
    padding: 30px;
}

.form{
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

label{
    font-size: 20px;
    color: ghostwhite;
    padding-left: 10px;
}

.inputs{
    width: 300px;
    height: 35px;
    outline: none;
    border-radius: 5px;
    border: 2px solid ghostwhite;
    transition: all 0.5s;
}

.inputs:focus{
    border: 2.5px solid dodgerblue;
}

button{
    width: 150px;
    height: 35px;
    border-radius: 10px;
    background-color: darkblue;
    color: ghostwhite;
    border: 2px solid darkblue;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
    transition: all 0.5s;
}

button:hover{
    background-color: dodgerblue;
    border: 2px solid dodgerblue;
}
</style>
<template>
    <form id="form" class="form" @submit.prevent="cadastraUsuario">
        <div>
            <label for="nome">Nome:</label>
            <input type="text" name="nome" id="nome" placeholder="Digite o seu nome" class="inputs" v-model="nome">
        </div>
        <div>
            <label for="sobrenome">Sobrenome:</label>
            <input type="text" name="sobrenome" id="sobrenome" placeholder="Digite o seu sobrenome" class="inputs" v-model="sobrenome">
        </div>
        <div>
            <label for="nomeDeUsuario">Nome de Usuário:</label>
            <input type="text" name="nomeDeUsuario" id="nomeDeUsuario" placeholder="Digite o seu nome de usuário" class="inputs" v-model="nomeDeUsuario">
        </div>
        <div>
            <label for="senha">Senha:</label>
            <input type="password" name="senha" id="senha" placeholder="Digite a sua senha" class="inputs" v-model="senha">
        </div>
        <div>
            <label for="repitaSenha">Repita a Senha:</label>
            <input type="password" name="repitaSenha" id="repitaSenha" placeholder="Digite a sua senha novamente" class="inputs" v-model="repitaSenha">
        </div>
        <button type="submit">Cadastrar</button>
    </form>
</template>

<script>
export default{
    name: "Cadastro",
    data(){
        return{
            nome: "",
            sobrenome: "",
            nomeDeUsuario: "",
            senha: "",
            repitaSenha: ""
        }
    },
    methods:{
        cadastraUsuario(){
        }
    }
}
</script>

<style scoped></style>
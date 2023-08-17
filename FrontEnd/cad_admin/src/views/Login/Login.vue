<template>
    <main>
        <h2>Login ADM</h2>

        <form id="login_form" class="login_form" @submit.prevent="handlerLogin">
            <div>
                <label for="nomeDeUsuario">Nome de Usuário:</label>
                <input type="text" id="nomeDeUsuario" class="inputs" placeholder="Digite o seu nome de usuário..." v-model="nomeDeUsuario">
                <span class="input_error">{{ inputErrors }}</span>
            </div>
            <div>
                <label for="senha">Senha:</label>
                <input type="password" id="senha" class="inputs" v-model="senha">
                <span class="input_error">{{ inputErrors }}</span>
            </div>
            <button type="submit" class="login_button">Fazer Login</button>
        </form>
    </main>
</template>

<script>
export default{
    data(){
        return{
            nomeDeUsuario: "",
            senha: ""
        }
    },
    methods:{
        handlerLogin(){
            axios.post('http://localhost:8080/novo/login')
        }
    }
}
</script>

<style scoped></style>
<template>
    <main class="main">
        <div class="btns">
            <h2>O que deseja fazer?</h2>
            <button><router-link to="/nova/conta">Cadastro</router-link></button>
            <button> <router-link to="/novo/login">Login</router-link></button>
        </div>
    </main>
</template>

<script>
export default{
    name: "Home"
}
</script>

<style scoped>
.main{
    width: 100%;
    height: 100vh;
    background-color: rgb(28, 28, 28);
}

.btns{
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 100px;
    gap: 20px;
}

.btns h2{
    color: ghostwhite;
    font-size: 30px;
}

.btns button{
    width: 300px;
    height: 35px;
    background-color: darkblue;
    outline: none;
    border: 2px solid darkblue;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.5s;
}

.btns button:hover{
    background-color: dodgerblue;
    outline: none;
    border: 2px solid dodgerblue;
    cursor: pointer;
}

.btns button a{
    color: whitesmoke;
    text-decoration: none;
    font-size: 16px;
}
</style>
<template>
    <header>
        <h1><router-link to="/">Área do ADMIN</router-link></h1>
    </header>
</template>

<script>
export default{
    name: "Header"
}
</script>

<style scoped>
header{
    width: 100%;
    height: 100px;
    background-color: dodgerblue;
}

h1 a{
    text-align: center;
    color: whitesmoke;
    padding: 30px;
    text-decoration: none;
}

h1 a:visited{
    text-align: center;
    color: whitesmoke;
    padding: 30px;
}
</style>
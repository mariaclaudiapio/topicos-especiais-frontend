<script>
	let contador = 0

    function incrementa() {
        contador++
    }
    function decrementa() {
        contador--
    }
</script>

<div>
    Valor: {contador} 
    <button on:click={incrementa}>Incrementar</button>
    <button on:click={decrementa}>Decrementar</button>
</div>

<style>
    button {
        color: blue;
    }
</style>

<script>
    let itens = [{
        comprado: false,
        descricao: "Pão de queijo"
    }, {
        comprado: true,
        descricao: "Coca Cola"
    }]

    
    let descricao = ""
    function handleInput(e) {
        descricao = e.target.value
        
    }

    function adicionarItem() {
        itens = [
            ...itens, {
                descricao: descricao
            }
        ]
        descricao = ""
    }
</script>

<h2>Lista de Compras</h2>
<input bind:value={descricao} />
<button on:click={adicionarItem}>Adicionar Item</button>

{#if itens.length === 0}
    <div>A lista está vazia.</div>
{:else}
    {#each itens as item, i}
    <div>
        <label>
            <input type="checkbox" bind:checked={item.comprado}>
            {item.descricao}
        </label>
    </div>
    {/each}
{/if}

<div>Itens pendentes: {itens.filter(item => item.comprado).length}</div>
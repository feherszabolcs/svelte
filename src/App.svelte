<script lang="ts">
  import Async from "./lib/Async.svelte";
  import { onMount, onDestroy } from "svelte";
  import { count } from "./stores";
  import Incrementer from "./lib/Incrementer.svelte";

  let name = "<button>szines</button>";

  $: {
    console.log("value changed ", name);
  } // this will log the value of name everytime it changes

  let todos = [
    { name: "todo1", id: crypto.randomUUID() },
    { name: "todo2", id: crypto.randomUUID() },
  ];

  onMount(() => {
    console.log("mounted");
  });

</script>

<h1>Helllo {name}!</h1>

<Incrementer />
<button on:click={() => $count--}>Decrease</button>
<h2>Clicked: {$count} {$count <= 1 ? "time" : "times"}!</h2>

{#if $count > 10}
  <p>greater than 10!</p>
{/if}

{#each todos as todo (todo.id)}
  <p>{todo.name}</p>
{/each}

<input type="text" bind:value={name} />

<!-- <Pointer /> -->
<Async />

<style>
  h1 {
    font-family: "Comic Sans MS";
  }
</style>

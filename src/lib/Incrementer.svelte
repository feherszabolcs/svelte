<script>
  import { count } from "../stores";

  const increment = () => {
    count.update((c) => c + 1);
  };
</script>

<button on:click={increment}>INCREMENT</button>

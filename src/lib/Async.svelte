<script lang="ts">
  import { getNumber } from "../utils/numberApi";

  const promise = getNumber();
</script>

{#await promise}
  <p>Loading...</p>
{:then result}
  <p>Title is: {result.title}</p>
{:catch error}
  <p>Error!!</p>
{/await}

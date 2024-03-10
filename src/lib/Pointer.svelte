<script lang="ts">
  export let mousePos = { x: 0, y: 0 };
</script>

<h3 on:pointermove={(e) => (mousePos = { x: e.clientX, y: e.clientY })}>
  mouse pos is at x: {mousePos.x}, y: {mousePos.y}
</h3>

<style>
  h3 {
    min-height: 100vh;
    position: fixed;
  }
</style>

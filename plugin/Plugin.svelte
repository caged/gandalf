<script>
  import {
    ElementaryPluginRenderer as core,
    el,
  } from "@nick-thompson/elementary";

  let value;

  core.on("load", () => {
    console.log("loaded");
    // core.render(el.mul(0.3, el.cycle(440)), el.mul(0.3, el.cycle(441)));
    core.render(el.highpass(1000, 1.414, el.in()));
  });

  core.initialize();
</script>

<div class="plugin">
  <input type="range" min="0" max="1" step="0.01" bind:value />
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  .plugin {
    width: 100vw;
    height: 100vh;
    background-color: #212121;
  }
</style>

<script>
  import {
    ElementaryPluginRenderer as core,
    el,
  } from "@nick-thompson/elementary";

  let lq = 0;
  let lf = 100;

  let hq = 0;
  let hf = 100;

  // core.on("load", () => {
  //   console.log("loaded");
  //   core.render(el.highpass(100, 1, el.in()));
  // });

  core.initialize();
</script>

<div class="plugin">
  <h1>Gandalf</h1>
  <div class="filters">
    <div class="filter">
      <h2>Low pass filter</h2>
      <div class="slider">
        <label for="lf">Low frequency <span class="val">{lf}</span></label>
        <input type="range" min="500" max="15000" step="1" bind:value={lf} />
      </div>
    </div>
    <div class="filter">
      <h2>High pass filter</h2>
      <div class="slider">
        <label for="lf">Low frequency <span class="val">{lf}</span></label>
        <input type="range" min="500" max="15000" step="1" bind:value={lf} />
      </div>
    </div>
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 14px;
    color: #f7f7f7;
  }
  :root {
    --range-height: 8px;
  }

  .plugin {
    width: 100vw;
    height: 100vh;
    background-color: #212121;
  }

  h1 {
    margin: 0;
    padding: 10px 20px;
    border-bottom: 1px solid #333;
    font-size: 1.5em;
  }

  h2 {
    margin: 0 0 20px 0;
    padding: 0;
    font-size: 1rem;
    color: #fff;
  }

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    margin: 0 0 5px 0;
  }

  input[type="range"] {
    appearance: none;
    -webkit-appearance: none;
    height: var(--range-height);
    border-radius: var(--range-height);
    background-color: #333;
    background-image: linear-gradient(
      hsla(0, 0%, 30%, 0.2),
      hsla(0, 0%, 45%, 0.2)
    );
    box-shadow: 1px 1px 0 0 hsla(0, 0%, 30%, 1);
    width: 100%;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    border: 0;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: hsl(100, 50%, 50%);
    width: calc(var(--range-height) * 2);
    height: calc(var(--range-height) * 2);
    border-radius: 50%;
    cursor: ew-resize;
  }

  .filters {
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .filter {
    padding: 20px;
    border-radius: 6px;
    background-color: #111;
    color: #888;
  }

  .val {
    font-family: monospace;
    font-size: 0.9em;
    color: hsl(100, 50%, 50%);
  }
</style>

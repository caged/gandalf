<script>
  import {
    ElementaryPluginRenderer as core,
    el,
  } from "@nick-thompson/elementary";
  import RangeSlider from "./RangeSlider.svelte";

  let lq = 0;
  let lpf;

  let hq = 0;
  let hpf;

  // core.on("load", () => {
  //   console.log("loaded");
  //   core.render(el.highpass(100, 1, el.in()));
  // });

  core.initialize();
</script>

<div class="plugin">
  <h1>
    Gandalf
    <span class="subtitle">You shall not pass at specific frequencies</span>
  </h1>
  <div class="filter">
    <span class="label">
      <span class="prop">High pass</span>
      <span class="val">{hpf}hz</span>
    </span>
    <div class="slider">
      <RangeSlider
        min="0"
        max="20000"
        bind:maxValue={lpf}
        bind:minValue={hpf}
      />
    </div>
    <span class="label">
      <span class="prop">Low pass</span>
      <span class="val">{lpf}hz</span>
    </span>
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
  .plugin {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    width: 100vw;
    height: 100vh;
    background-color: #212121;
  }

  .plugin > * {
    flex: 1 100%;
  }
  h1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 10px 20px;
    border-bottom: 1px solid #333;
    font-size: 1.5em;
  }

  .subtitle {
    font-size: 0.7em;
    font-weight: normal;
    color: #777;
    font-style: italic;
  }

  .filter {
    display: flex;
    align-items: center;
    width: 400px;
    padding: 10px 20px;
    background: #333;
    border-radius: 40px;
    margin: 100px;
  }

  .slider {
    flex: 1;
    padding: 20px;
  }

  .prop {
    display: block;
    font-weight: bold;
  }

  .val {
    font-family: monospace;
    font-size: 0.8em;
    color: hsl(300, 80%, 70%);
  }
</style>

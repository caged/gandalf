<script>
  import { createEventDispatcher } from "svelte";
  export let min = 0;
  export let max = 5000;
  export let step = 1;

  export let minValue = min;
  export let maxValue = max;

  const dispatch = createEventDispatcher();

  $: {
    minValue = Math.min(minValue, maxValue);
    maxValue = Math.max(maxValue, minValue);
    dispatch("change", { minValue, maxValue });
  }
</script>

<div class="range">
  <input type="range" {min} {max} {step} bind:value={minValue} />
  <input type="range" {min} {max} {step} bind:value={maxValue} />
</div>

<style>
  .range {
    --range-height: 6px;
    position: relative;
    height: var(--range-height);
  }

  input[type="range"] {
    position: absolute;
    top: 0;
    left: 0;
    appearance: none;
    -webkit-appearance: none;
    border-radius: var(--range-height);
    width: 100%;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    appearance: none;
    -webkit-appearance: none;
    background: gray;
    height: var(--range-height);
    border-radius: var(--range-height);
  }

  input[type="range"]::-webkit-slider-thumb {
    z-index: 3;
    position: relative;
    -webkit-appearance: none;
    background: hsl(200, 80%, 50%);
    width: calc(var(--range-height) * 2);
    height: calc(var(--range-height) * 2);
    border-radius: 50%;
    cursor: ew-resize;
    margin-top: calc(var(--range-height) * -0.5);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  }
</style>

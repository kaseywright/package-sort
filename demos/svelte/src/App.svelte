<script lang="ts">
  import { sort, type Package } from "../../../sort";

  const examples: { label: string; pkg: Package }[] = [
    { label: "Standard", pkg: { width: 10, height: 10, length: 10, mass: 1 } },
    { label: "Special", pkg: { width: 200, height: 10, length: 10, mass: 1 } },
    {
      label: "Rejected",
      pkg: { width: 200, height: 200, length: 200, mass: 25 },
    },
  ];

  let custom: Package = { width: 0, height: 0, length: 0, mass: 0 };
  let result: string | null = null;
  let error: string | null = null;

  function classify(pkg: Package) {
    try {
      result = sort(pkg);
      error = null;
    } catch (e) {
      result = null;
      error = e instanceof Error ? e.message : String(e);
    }
  }
</script>

<main>
  <h1>Package Sort Demo</h1>
  <div style="margin-bottom: 1em;">
    {#each examples as { label, pkg }}
      <button on:click={() => classify(pkg)}>{label} Example</button>
    {/each}
  </div>
  <div style="margin-bottom: 1em;">
    <h2>Custom Package</h2>
    <label>
      Width (cm):
      <input type="number" bind:value={custom.width} min="0" />
    </label>
    <label>
      Height (cm):
      <input type="number" bind:value={custom.height} min="0" />
    </label>
    <label>
      Length (cm):
      <input type="number" bind:value={custom.length} min="0" />
    </label>
    <label>
      Mass (kg):
      <input type="number" bind:value={custom.mass} min="0" />
    </label>
    <button on:click={() => classify(custom)} style="margin-left: 1em;"
      >Classify</button
    >
  </div>
  {#if result}
    <div class="result">Classification: <strong>{result}</strong></div>
  {/if}
  {#if error}
    <div class="error">Error: {error}</div>
  {/if}
</main>

<style>
  main {
    font-family: system-ui, sans-serif;
    max-width: 500px;
    margin: 2em auto;
    padding: 2em;
  }
  button {
    margin: 0.5em 0.5em 0.5em 0;
    padding: 0.5em 1.2em;
    border: none;
    border-radius: 4px;
    background: #0077ee;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
  button:hover {
    background: #005fa3;
  }
  label {
    display: block;
    margin-bottom: 0.5em;
  }
  input[type="number"] {
    margin-left: 0.5em;
    width: 5em;
  }
  .result {
    margin-top: 1em;
    font-size: 1.2em;
    color: #007700;
  }
  .error {
    margin-top: 1em;
    color: #c00;
  }
</style>

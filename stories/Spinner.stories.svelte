<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import Spinner from "../src/Spinner.svelte";
</script>

<Meta title="Components/Spinners" component={Spinner} />

<Story name="Spinners">
  <Spinner class="w-6 h-6 inline" />
</Story>

<Story name="with size">
  <Spinner class="w-4 h-4 inline" />
  <Spinner class="w-8 h-8 inline" />
  <Spinner class="w-12 h-12 inline" />
</Story>

<Story name="with color">
  <Spinner class="w-6 h-6 text-blue-500 inline" />
  <Spinner class="w-6 h-6 text-green-500 inline" />
  <Spinner class="w-6 h-6 text-red-500 inline" />
  <Spinner class="w-6 h-6 text-yellow-500 inline" />
</Story>

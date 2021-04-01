<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import SpinnerC from "../src/Spinner.svelte";
</script>

<Meta
  title="Components/Spinner"
  component={SpinnerC}
/>

<Template let:args>
  <SpinnerC class="w-6 h-6" {...args} />
</Template>

<Story 
  name="Spinner"
/>
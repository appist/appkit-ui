<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import Spinner from "../src/Spinner.svelte";
</script>

<Meta title="Components/Spinners" component={Spinner} />

<Story name="Spinners">
  <Spinner />
</Story>

<Story name="size">
  <Spinner size="sm" color="primary" />
  <Spinner size="md" color="secondary" />
  <Spinner size="lg" color="danger" />
</Story>

<Story name="color">
  <Spinner color="primary" />
  <Spinner color="secondary" />
  <Spinner color="danger" />
  <Spinner color="info" />
  <Spinner color="success" />
  <Spinner color="warning" />
</Story>

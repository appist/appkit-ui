<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import home from "@iconify-icons/heroicons-solid/home";
  import Button from "../src/Button.svelte";
</script>

<Meta title="Components/Buttons" component={Button} />

<Story name="Buttons">
  <Button>Button</Button>
</Story>

<Story name="color">
  <Button color="primary">Primary</Button>
  <Button color="secondary">Secondary</Button>
  <Button color="danger">Danger</Button>
  <Button color="info">Info</Button>
  <Button color="success">Success</Button>
  <Button color="warning">Warning</Button>
</Story>

<Story name="icon">
  <div>
    <Button size="sm" icon={home}>Home</Button>
    <Button size="md" icon={home}>Home</Button>
    <Button size="lg" icon={home}>Home</Button>
  </div>

  <div class="mt-6">
    <Button size="sm" icon={home} iconPos="leading">Home</Button>
    <Button size="md" icon={home} iconPos="leading">Home</Button>
    <Button size="lg" icon={home} iconPos="leading">Home</Button>
  </div>

  <div class="mt-6">
    <Button size="sm" icon={home} iconPos="trailing">Home</Button>
    <Button size="md" icon={home} iconPos="trailing">Home</Button>
    <Button size="lg" icon={home} iconPos="trailing">Home</Button>
  </div>
</Story>

<Story name="shape">
  <div>
    <Button size="sm" shape="default">Default</Button>
    <Button size="sm" shape="circle" icon={home}>Circle</Button>
    <Button size="sm" shape="pill">Pill</Button>
    <Button size="sm" shape="round">Round</Button>
  </div>

  <div class="mt-6">
    <Button size="md" shape="default">Default</Button>
    <Button size="md" shape="circle" icon={home}>Circle</Button>
    <Button size="md" shape="pill">Pill</Button>
    <Button size="md" shape="round">Round</Button>
  </div>

  <div class="mt-6">
    <Button size="lg" shape="default">Default</Button>
    <Button size="lg" shape="circle" icon={home}>Circle</Button>
    <Button size="lg" shape="pill">Pill</Button>
    <Button size="lg" shape="round">Round</Button>
  </div>
</Story>

<Story name="size">
  <div>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>

  <div class="mt-6">
    <Button size="sm" outline>Small</Button>
    <Button size="md" outline>Medium</Button>
    <Button size="lg" outline>Large</Button>
  </div>
</Story>

<Story name="block">
  <Button color="primary" block>Primary</Button>
  <Button color="secondary" block>Secondary</Button>
  <Button color="danger" block>Danger</Button>
  <Button color="info" block>Info</Button>
  <Button color="success" block>Success</Button>
  <Button color="warning" block>Warning</Button>
</Story>

<Story name="disabled">
  <Button color="primary" disabled>Primary</Button>
  <Button color="secondary" disabled>Secondary</Button>
  <Button color="danger" disabled>Danger</Button>
  <Button color="info" disabled>Info</Button>
  <Button color="success" disabled>Success</Button>
  <Button color="warning" disabled>Warning</Button>
</Story>

<Story name="loading">
  <div>
    <Button color="primary" size="sm" loading>Primary</Button>
    <Button color="secondary" size="sm" loading>Secondary</Button>
    <Button color="danger" size="sm" loading>Danger</Button>
    <Button color="info" size="sm" loading>Info</Button>
    <Button color="success" size="sm" loading>Success</Button>
    <Button color="warning" size="sm" loading>Warning</Button>
  </div>

  <div class="mt-6">
    <Button color="primary" size="md" loading>Primary</Button>
    <Button color="secondary" size="md" loading>Secondary</Button>
    <Button color="danger" size="md" loading>Danger</Button>
    <Button color="info" size="md" loading>Info</Button>
    <Button color="success" size="md" loading>Success</Button>
    <Button color="warning" size="md" loading>Warning</Button>
  </div>

  <div class="mt-6">
    <Button color="primary" size="lg" loading>Primary</Button>
    <Button color="secondary" size="lg" loading>Secondary</Button>
    <Button color="danger" size="lg" loading>Danger</Button>
    <Button color="info" size="lg" loading>Info</Button>
    <Button color="success" size="lg" loading>Success</Button>
    <Button color="warning" size="lg" loading>Warning</Button>
  </div>
</Story>

<Story name="outline">
  <div>
    <Button color="primary" outline>Primary</Button>
    <Button color="secondary" outline>Secondary</Button>
    <Button color="danger" outline>Danger</Button>
    <Button color="info" outline>Info</Button>
    <Button color="success" outline>Success</Button>
    <Button color="warning" outline>Warning</Button>
  </div>

  <div class="mt-6">
    <Button color="primary" outline disabled>Primary</Button>
    <Button color="secondary" outline disabled>Secondary</Button>
    <Button color="danger" outline disabled>Danger</Button>
    <Button color="info" outline disabled>Info</Button>
    <Button color="success" outline disabled>Success</Button>
    <Button color="warning" outline disabled>Warning</Button>
  </div>

  <div class="mt-6">
    <Button color="primary" outline loading>Primary</Button>
    <Button color="secondary" outline loading>Secondary</Button>
    <Button color="danger" outline loading>Danger</Button>
    <Button color="info" outline loading>Info</Button>
    <Button color="success" outline loading>Success</Button>
    <Button color="warning" outline loading>Warning</Button>
  </div>
</Story>

<Story name="mixed">
  <div>
    <Button color="primary" disabled>Primary</Button>
    <Button class="align-bottom" color="primary" shape="round" loading>Primary</Button>
    <Button size="md" shape="circle" icon={home} on:click={() => console.log("test")}>Circle</Button
    >
    <Button size="md" shape="circle" icon={home} loading>Circle</Button>
    <Button class="align-bottom" size="md" icon={home} iconPos="leading">Leading Icon</Button>
    <Button class="align-bottom" size="md" icon={home} iconPos="leading" loading
      >Leading Icon</Button
    >
    <Button size="md" icon={home} iconPos="trailing">Trailing Icon</Button>
    <Button class="align-bottom" size="md" icon={home} iconPos="trailing" loading
      >Trailing Icon</Button
    >
    <Button color="primary" shape="round" outline>Primary</Button>
  </div>
</Story>

<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import home from "@iconify-icons/heroicons-solid/home";
  import Button from "../src/Button.svelte";
</script>

<Meta title="Components/Buttons" component={Button} />

<Story name="kind">
  <Button kind="primary">Primary</Button>
  <Button kind="secondary">Secondary</Button>
  <Button kind="danger">Danger</Button>
  <Button kind="info">Info</Button>
  <Button kind="success">Success</Button>
  <Button kind="warning">Warning</Button>
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
    <Button size="sm" shape="pill">Pill</Button>
    <Button size="sm" shape="round" icon={home}>Round</Button>
  </div>

  <div class="mt-6">
    <Button size="md" shape="default">Default</Button>
    <Button size="md" shape="pill">Pill</Button>
    <Button size="md" shape="round" icon={home}>Round</Button>
  </div>

  <div class="mt-6">
    <Button size="lg" shape="default">Default</Button>
    <Button size="lg" shape="pill">Pill</Button>
    <Button size="lg" shape="round" icon={home}>Round</Button>
  </div>
</Story>

<Story name="size">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</Story>

<Story name="block">
  <Button kind="primary" block>Primary</Button>
  <Button kind="secondary" block>Secondary</Button>
  <Button kind="danger" block>Danger</Button>
  <Button kind="info" block>Info</Button>
  <Button kind="success" block>Success</Button>
  <Button kind="warning" block>Warning</Button>
</Story>

<Story name="disabled">
  <Button kind="primary" disabled>Primary</Button>
  <Button kind="secondary" disabled>Secondary</Button>
  <Button kind="danger" disabled>Danger</Button>
  <Button kind="info" disabled>Info</Button>
  <Button kind="success" disabled>Success</Button>
  <Button kind="warning" disabled>Warning</Button>
</Story>

<Story name="loading">
  <div>
    <Button kind="primary" size="sm" loading>Primary</Button>
    <Button kind="secondary" size="sm" loading>Secondary</Button>
    <Button kind="danger" size="sm" loading>Danger</Button>
    <Button kind="info" size="sm" loading>Info</Button>
    <Button kind="success" size="sm" loading>Success</Button>
    <Button kind="warning" size="sm" loading>Warning</Button>
  </div>

  <div class="mt-6">
    <Button kind="primary" size="md" loading>Primary</Button>
    <Button kind="secondary" size="md" loading>Secondary</Button>
    <Button kind="danger" size="md" loading>Danger</Button>
    <Button kind="info" size="md" loading>Info</Button>
    <Button kind="success" size="md" loading>Success</Button>
    <Button kind="warning" size="md" loading>Warning</Button>
  </div>

  <div class="mt-6">
    <Button kind="primary" size="lg" loading>Primary</Button>
    <Button kind="secondary" size="lg" loading>Secondary</Button>
    <Button kind="danger" size="lg" loading>Danger</Button>
    <Button kind="info" size="lg" loading>Info</Button>
    <Button kind="success" size="lg" loading>Success</Button>
    <Button kind="warning" size="lg" loading>Warning</Button>
  </div>
</Story>

<Story name="mixed">
  <div>
    <Button kind="primary" disabled>Primary</Button>
    <Button class="align-bottom" kind="primary" loading>Primary</Button>
    <Button size="md" shape="round" icon={home}>Round</Button>
    <Button size="md" shape="round" icon={home} loading>Round</Button>
    <Button class="align-bottom" size="md" icon={home} iconPos="leading">Leading Icon</Button>
    <Button class="align-bottom" size="md" icon={home} iconPos="leading" loading
      >Leading Icon</Button
    >
    <Button size="md" icon={home} iconPos="trailing">Trailing Icon</Button>
    <Button class="align-bottom" size="md" icon={home} iconPos="trailing" loading
      >Trailing Icon</Button
    >
  </div>
</Story>

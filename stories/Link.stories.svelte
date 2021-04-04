<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import home from "@iconify-icons/heroicons-solid/home";
  import Link from "../src/Link.svelte";
</script>

<Meta title="Components/Links" component={Link} />

<Story name="Links">
  <Link href="https://google.com">Link</Link>
</Story>

<Story name="color">
  <Link href="https://google.com">Empty</Link>
  <Link href="https://google.com" color="primary">Primary</Link>
  <Link href="https://google.com" color="secondary">Secondary</Link>
  <Link href="https://google.com" color="danger">Danger</Link>
  <Link href="https://google.com" color="info">Info</Link>
  <Link href="https://google.com" color="success">Success</Link>
  <Link href="https://google.com" color="warning">Warning</Link>
</Story>

<Story name="icon">
  <div>
    <Link href="https://google.com" size="sm" icon={home}>Home</Link>
    <Link href="https://google.com" size="md" icon={home} color="primary">Home</Link>
    <Link href="https://google.com" size="lg" icon={home} color="secondary">Home</Link>
  </div>

  <div class="mt-6">
    <Link href="https://google.com" size="sm" icon={home} iconPos="leading">Home</Link>
    <Link href="https://google.com" size="md" icon={home} iconPos="leading" color="primary"
      >Home</Link
    >
    <Link href="https://google.com" size="lg" icon={home} iconPos="leading" color="secondary"
      >Home</Link
    >
  </div>

  <div class="mt-6">
    <Link href="https://google.com" size="sm" icon={home} iconPos="trailing">Home</Link>
    <Link href="https://google.com" size="md" icon={home} iconPos="trailing" color="primary"
      >Home</Link
    >
    <Link href="https://google.com" size="lg" icon={home} iconPos="trailing" color="secondary"
      >Home</Link
    >
  </div>
</Story>

<Story name="shape">
  <div>
    <Link href="https://google.com" size="sm" shape="default" color="primary">Default</Link>
    <Link href="https://google.com" size="sm" shape="circle" icon={home} color="primary"
      >Circle</Link
    >
    <Link href="https://google.com" size="sm" shape="pill" color="primary">Pill</Link>
    <Link href="https://google.com" size="sm" shape="round" color="primary">Round</Link>
  </div>

  <div class="mt-6">
    <Link href="https://google.com" size="md" shape="default" color="primary">Default</Link>
    <Link href="https://google.com" size="md" shape="circle" icon={home} color="primary"
      >Circle</Link
    >
    <Link href="https://google.com" size="md" shape="pill" color="primary">Pill</Link>
    <Link href="https://google.com" size="md" shape="round" color="primary">Round</Link>
  </div>

  <div class="mt-6">
    <Link href="https://google.com" size="lg" shape="default" color="primary">Default</Link>
    <Link href="https://google.com" size="lg" shape="circle" icon={home} color="primary"
      >Circle</Link
    >
    <Link href="https://google.com" size="lg" shape="pill" color="primary">Pill</Link>
    <Link href="https://google.com" size="lg" shape="round" color="primary">Round</Link>
  </div>
</Story>

<Story name="size">
  <div>
    <Link href="https://google.com" size="sm" color="primary">Small</Link>
    <Link href="https://google.com" size="md" color="primary">Medium</Link>
    <Link href="https://google.com" size="lg" color="primary">Large</Link>
  </div>

  <div class="mt-6">
    <Link href="https://google.com" size="sm" color="primary" outline>Small</Link>
    <Link href="https://google.com" size="md" color="primary" outline>Medium</Link>
    <Link href="https://google.com" size="lg" color="primary" outline>Large</Link>
  </div>
</Story>

<Story name="block">
  <Link href="https://google.com" color="primary" block>Primary</Link>
  <Link href="https://google.com" color="secondary" block>Secondary</Link>
  <Link href="https://google.com" color="danger" block>Danger</Link>
  <Link href="https://google.com" color="info" block>Info</Link>
  <Link href="https://google.com" color="success" block>Success</Link>
  <Link href="https://google.com" color="warning" block>Warning</Link>
</Story>

<Story name="disabled">
  <Link href="https://google.com" color="primary" disabled>Primary</Link>
  <Link href="https://google.com" color="secondary" disabled>Secondary</Link>
  <Link href="https://google.com" color="danger" disabled>Danger</Link>
  <Link href="https://google.com" color="info" disabled>Info</Link>
  <Link href="https://google.com" color="success" disabled>Success</Link>
  <Link href="https://google.com" color="warning" disabled>Warning</Link>
</Story>

<Story name="outline">
  <div>
    <Link href="https://google.com" color="primary" outline>Primary</Link>
    <Link href="https://google.com" color="secondary" outline>Secondary</Link>
    <Link href="https://google.com" color="danger" outline>Danger</Link>
    <Link href="https://google.com" color="info" outline>Info</Link>
    <Link href="https://google.com" color="success" outline>Success</Link>
    <Link href="https://google.com" color="warning" outline>Warning</Link>
  </div>

  <div class="mt-6">
    <Link href="https://google.com" color="primary" outline disabled>Primary</Link>
    <Link href="https://google.com" color="secondary" outline disabled>Secondary</Link>
    <Link href="https://google.com" color="danger" outline disabled>Danger</Link>
    <Link href="https://google.com" color="info" outline disabled>Info</Link>
    <Link href="https://google.com" color="success" outline disabled>Success</Link>
    <Link href="https://google.com" color="warning" outline disabled>Warning</Link>
  </div>
</Story>

<Story name="mixed">
  <div>
    <Link href="https://google.com" color="primary" disabled>Primary</Link>
    <Link href="https://google.com" class="align-bottom" color="primary" shape="round">Primary</Link
    >
    <Link
      href="https://google.com"
      size="md"
      shape="circle"
      icon={home}
      color="primary"
      on:click={() => console.log("test")}>Circle</Link
    >
    <Link
      href="https://google.com"
      class="align-bottom"
      size="md"
      icon={home}
      iconPos="leading"
      color="primary">Leading Icon</Link
    >
    <Link href="https://google.com" size="md" icon={home} iconPos="trailing" color="primary"
      >Trailing Icon</Link
    >
    <Link href="https://google.com" color="primary" shape="round" outline>Primary</Link>
  </div>
</Story>

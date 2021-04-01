<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import H1 from "./components/H1.svelte";
  import H2 from "./components/H2.svelte";
  import IconStories from "./Icon.stories.svelte";
  import ButtonC from "../src/Button.svelte";
</script>

<Meta
  title="Components/Button"
  component={ButtonC}
  argTypes={{
    block: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    },
    icon: IconStories.argTypes.icon,
    iconPos: {
      control: "inline-radio",
      options: ["cover", "leading", "trailing"],
    },
    iconVariant: {
      control: "inline-radio",
      options: ["outline", "solid"],
    },
    loading: {
      control: "boolean"
    },
    shape: {
      control: "inline-radio",
      options: ["default", "circle", "pill", "round"],
    },
    size: {
      control: "inline-radio",
      options: ["lg", "md", "sm"],
    },
    type: {
      control: "inline-radio",
      options: ["primary", "secondary", "minimal"],
    },
    onClick: { action: 'onClick' },
  }}
/>

<Template let:args let:onClick>
  <H1>Playground</H1>
  <ButtonC {...args} on:click={onClick}>button</ButtonC>

  <H1>Properties</H1>

  <H2>type</H2>
  <ButtonC type="primary">primary</ButtonC>
  <ButtonC type="secondary">secondary</ButtonC>
  <ButtonC type="minimal">minimal</ButtonC>

  <H2>size</H2>
  <ButtonC size="sm">small</ButtonC>
  <ButtonC size="md">medium</ButtonC>
  <ButtonC size="lg">large</ButtonC>

  <H2>disabled</H2>
  <ButtonC type="primary" size="sm" disabled={true}>small</ButtonC>
  <ButtonC type="secondary" size="md" disabled={true}>medium</ButtonC>
  <ButtonC type="minimal" size="lg" disabled={true}>large</ButtonC>

  <H2>loading</H2>
  <ButtonC type="primary" size="sm" loading={true}>small</ButtonC>
  <ButtonC type="secondary" size="md" loading={true}>medium</ButtonC>
  <ButtonC type="minimal" size="lg" loading={true}>large</ButtonC>

  <H2>leading icon</H2>
  <ButtonC type="primary" size="sm" icon="academic-cap" iconPos="leading">small</ButtonC>
  <ButtonC type="secondary" size="md" icon="adjustments" iconPos="leading">medium</ButtonC>
  <ButtonC type="minimal" size="lg" icon="annotation" iconPos="leading">large</ButtonC>

  <H2>trailing icon</H2>
  <ButtonC type="primary" size="sm" icon="academic-cap" iconPos="trailing">small</ButtonC>
  <ButtonC type="secondary" size="md" icon="adjustments" iconPos="trailing">medium</ButtonC>
  <ButtonC type="minimal" size="lg" icon="annotation" iconPos="trailing">large</ButtonC>

  <H2>shape</H2>
  <ButtonC shape="default" size="sm">default</ButtonC>
  <ButtonC shape="circle" size="sm" icon="mail">circle</ButtonC>
  <ButtonC shape="pill" size="sm">green pill</ButtonC>
  <ButtonC shape="round" size="sm">round</ButtonC>
  <br /><br />
  <ButtonC shape="default">default</ButtonC>
  <ButtonC shape="circle" icon="mail">circle</ButtonC>
  <ButtonC shape="pill">green pill</ButtonC>
  <ButtonC shape="round">round</ButtonC>
  <br /><br />
  <ButtonC shape="default" size="lg">default</ButtonC>
  <ButtonC shape="circle" size="lg" icon="mail"></ButtonC>
  <ButtonC shape="pill" size="lg">green pill</ButtonC>
  <ButtonC shape="round" size="lg">round</ButtonC>
</Template>

<Story 
  name="Button" 
  args={{ 
    block: false, 
    disabled: false,
    icon: "", 
    iconPos: "cover",
    iconVariant: "solid",
    loading: false,
    shape: "default",
    size: "md",
    type: "primary"
  }} 
/>

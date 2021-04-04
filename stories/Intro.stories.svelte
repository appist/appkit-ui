<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import Intro from "../src/Intro.svelte";
</script>

<Meta title="Components/Intros" component={Intro} />

<Story name="Intros">
  <Intro
    class="max-w-6xl"
    shortDesc="A better way to ship apps"
    longDesc="Start your project with a SQL/NoSQL database,
authentication, background processing, realtime subscriptions, serverless APIs, and storage, all
in less than 5 minutes."
    images={[{ alt: "Introduction", src: "https://i.imgur.com/I8hzGS5.png" }]}
    links={[
      {
        color: "primary",
        href: "/register",
        name: "Register Now",
        outline: false,
      },
    ]}
  />
</Story>

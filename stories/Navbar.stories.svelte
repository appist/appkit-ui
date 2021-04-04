<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import Navbar from "../src/Navbar.svelte";
</script>

<Meta title="Components/Navbars" component={Navbar} />

<Story name="Navbars">
  <div style="background-color: #eff2f6; height: 280px;">
    <Navbar
      brand={{
        href: "https://appist.github.io/appkit-ui/",
        logo: "https://i.imgur.com/WSieSgm.png",
        name: "appkit-ui",
      }}
      navLinks={[
        { name: "Docs", href: "/docs" },
        { name: "Pricing", href: "/pricing" },
      ]}
      authLinks={[
        { name: "Login", href: "/login", color: "" },
        { name: "Register", href: "/register", color: "success" },
      ]}
    />
  </div>
</Story>

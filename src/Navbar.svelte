<script lang="ts">
  import clsx from "clsx";
  import iconClose from "@iconify-icons/heroicons-solid/x";
  import iconMenu from "@iconify-icons/heroicons-solid/menu";
  import Button from "./Button.svelte";
  import Link from "./Link.svelte";
  import type { NavbarBrand, NavbarAuthLink, NavbarNavLink } from "./types";

  export let brand: NavbarBrand = {
    href: "/",
    logo: "https://i.imgur.com/WSieSgm.png",
    name: "appkit-ui",
  };

  export let authLinks: Array<NavbarAuthLink> = [];
  export let navLinks: Array<NavbarNavLink> = [];

  const { class: klass, ...props } = $$props;
  let menuOpen: boolean = false;
</script>

<header class={clsx("relative p-4 mx-auto", klass)} {...props}>
  <nav class="relative flex items-center justify-between">
    <div class="flex items-center flex-1">
      <a href={brand.href}>
        <img class="h-10 w-auto inline align-middle" src={brand.logo} alt={brand.name} />
        <span class="align-middle">{brand.name}</span>
      </a>
    </div>

    <div class="hidden md:flex md:flex-1 md:items-center md:space-x-6">
      {#each navLinks as { href, name }, _}
        <a {href}>{name}</a>
      {/each}
    </div>

    <div class="hidden md:flex md:items-center md:space-x-6">
      {#each authLinks as { href, name, color }, _}
        <Link {color} {href}>{name}</Link>
      {/each}
    </div>

    <div class="flex items-center md:hidden">
      <Button
        class="bg-transparent hover:bg-gray-200 text-gray-500"
        size="lg"
        icon={iconMenu}
        on:click={() => (menuOpen = !menuOpen)}
      />
    </div>
  </nav>

  <div class="absolute top-0 inset-x-0 p-2 md:hidden" style={menuOpen ? "" : "display: none;"}>
    <div class="rounded-sm shadow-md bg-white overflow-hidden p-2">
      <div class="flex items-center justify-between">
        <div>
          <a href={brand.href}>
            <img class="h-10 w-auto inline align-middle" src={brand.logo} alt={brand.name} />
            <span class="align-middle">{brand.name}</span>
          </a>
        </div>

        <div>
          <Button
            class="bg-transparent hover:bg-gray-200 text-gray-500"
            size="lg"
            icon={iconClose}
            on:click={() => (menuOpen = !menuOpen)}
          />
        </div>
      </div>

      <div class="my-2">
        {#each navLinks as { href, name }, _}
          <Link
            class="p-2 my-1 hover:bg-gray-200"
            block
            {href}
            on:click={() => (menuOpen = !menuOpen)}>{name}</Link
          >
        {/each}

        {#each authLinks as { href, name, color }, _}
          <Link
            class={clsx({ "p-2 hover:bg-gray-200": !color }, "my-1")}
            block
            {color}
            {href}
            on:click={() => (menuOpen = !menuOpen)}>{name}</Link
          >
        {/each}
      </div>
    </div>
  </div>
</header>

<style lang="postcss" scoped>
  .nav-link {
    text-underline-offset: 0.25rem;
  }
</style>

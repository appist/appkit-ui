<script lang="ts">
  import clsx from "clsx";
  import iconClose from "@iconify-icons/heroicons-solid/x";
  import iconMenu from "@iconify-icons/heroicons-solid/menu";
  import Button from "./Button.svelte";
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
        <a class="nav-link hover:underline" {href}>{name}</a>
      {/each}
    </div>

    <div class="hidden md:flex md:items-center md:space-x-6">
      {#each authLinks as { href, name, bgColor }, _}
        <a
          class={clsx({
            "nav-link hover:underline": bgColor === "",
            "rounded-sm text-white px-4 py-2": bgColor !== "",
            "bg-primary-500 hover:bg-primary-600": bgColor === "primary",
            "bg-secondary-500 hover:bg-secondary-600": bgColor === "secondary",
            "bg-danger-500 hover:bg-danger-600": bgColor === "danger",
            "bg-info-500 hover:bg-info-600": bgColor === "info",
            "bg-success-500 hover:bg-success-600": bgColor === "success",
            "bg-warning-500 hover:bg-warning-600": bgColor === "warning",
          })}
          {href}>{name}</a
        >
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
          <a class="p-2 block hover:bg-gray-200" {href} on:click={() => (menuOpen = !menuOpen)}
            >{name}</a
          >
        {/each}

        {#each authLinks as { href, name, bgColor }, _}
          <a
            class={clsx(
              {
                "hover:bg-gray-200": bgColor === "",
                "rounded-sm text-white text-center mt-2": bgColor !== "",
                "bg-primary-500 hover:bg-primary-600": bgColor === "primary",
                "bg-secondary-500 hover:bg-secondary-600": bgColor === "secondary",
                "bg-danger-500 hover:bg-danger-600": bgColor === "danger",
                "bg-info-500 hover:bg-info-600": bgColor === "info",
                "bg-success-500 hover:bg-success-600": bgColor === "success",
                "bg-warning-500 hover:bg-warning-600": bgColor === "warning",
              },
              "p-2 block"
            )}
            {href}
            on:click={() => (menuOpen = !menuOpen)}>{name}</a
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

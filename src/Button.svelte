<script lang="ts">
  import clsx from "clsx";
  import type { IconifyIcon } from "@iconify/svelte";
  import Icon from "@iconify/svelte";
  import Spinner from "./Spinner.svelte";

  export let block: boolean = false;
  export let disabled: boolean = false;
  export let icon: IconifyIcon = null;
  export let iconPos: "cover" | "leading" | "trailing" = "cover";
  export let loading: boolean = false;
  export let outline: boolean = false;
  export let shape: "default" | "pill" | "round" = "default";
  export let size: "lg" | "md" | "sm" = "md";
  export let color:
    | "danger"
    | "dark"
    | "info"
    | "light"
    | "primary"
    | "secondary"
    | "success"
    | "warning" = "primary";

  const { class: klass, ...props } = $$props;
</script>

<button
  type="button"
  class={clsx(
    {
      "w-full justify-center": block,
      "opacity-60 pointer-events-none": disabled,
      "flex-col pointer-events-none": loading,

      // To support different button sizes.
      "p-1.5 text-sm": size === "sm",
      "p-2 text-base": size === "md",
      "p-2.5 text-lg": size === "lg",

      // To support different button shapes.
      "px-6 rounded-full": shape === "pill",

      "flex items-center justify-center rounded-full align-bottom": shape === "round",

      // Ensure size consistency when the shape is round.
      "h-8 w-8": size === "sm" && shape === "round",
      "h-10 w-10": size === "md" && shape === "round",
      "h-12 w-12": size === "lg" && shape === "round",

      // Note: PurgeCSS won't work well with dynamic classes. Hence, the repeatitive class switching below.
      "bg-primary-500 hover:bg-primary-600": color === "primary" && !outline,
      "bg-secondary-500 hover:bg-secondary-600": color === "secondary" && !outline,
      "bg-danger-500 hover:bg-danger-600": color === "danger" && !outline,
      "bg-info-500 hover:bg-info-600": color === "info" && !outline,
      "bg-success-500 hover:bg-success-600": color === "success" && !outline,
      "bg-warning-500 hover:bg-warning-600": color === "warning" && !outline,

      // To support outline button.
      "bg-transparent border hover:text-white": outline,
      "p-[0.3125rem]": size === "sm" && outline,
      "p-[0.4375rem]": size === "md" && outline,
      "p-[0.5625rem]": size === "lg" && outline,
      "border-primary-500 text-primary-500 hover:bg-primary-600": color === "primary" && outline,
      "border-secondary-500 text-secondary-500 hover:bg-secondary-600":
        color === "secondary" && outline,
      "border-danger-500 text-danger-500 hover:bg-danger-600": color === "danger" && outline,
      "border-info-500 text-info-500 hover:bg-info-600": color === "info" && outline,
      "border-success-500 text-success-500 hover:bg-success-600": color === "success" && outline,
      "border-warning-500 text-warning-500 hover:bg-warning-600": color === "warning" && outline,
    },
    "inline-flex items-center text-white text-center focus:outline-none",
    klass
  )}
  style={props.style}
  on:click
  on:dblclick
>
  {#if loading}
    <Spinner {size} color={outline ? color : "white"} />

    <div class="opacity-0 flex h-0">
      {#if icon !== ""}
        {#if iconPos === "cover"}
          <Icon {icon} />
          <slot />
        {:else if iconPos === "leading"}
          <Icon {icon} />
          <slot />
        {:else if iconPos === "trailing"}
          <slot />
          <Icon {icon} />
        {/if}
      {:else}
        <slot />
      {/if}
    </div>
  {:else if icon}
    {#if iconPos === "cover"}
      <Icon {icon} />
    {:else if iconPos === "leading"}
      <Icon
        class={clsx({
          "mr-0.5": size === "sm",
          "mr-1": size === "md",
          "mr-1.5": size === "lg",
        })}
        {icon}
      />
      <slot />
    {:else if iconPos === "trailing"}
      <slot />
      <Icon
        class={clsx({
          "ml-0.5": size === "sm",
          "ml-1": size === "md",
          "ml-1.5": size === "lg",
        })}
        {icon}
      />
    {/if}
  {:else}
    <slot />
  {/if}
</button>

<script lang="ts">
  import clsx from "clsx";
  import type { IconifyIcon } from "@iconify/svelte";
  import Icon from "@iconify/svelte";
  import Spinner from "./Spinner.svelte";
  import Button from "../stories/Button.stories.svelte";
  import { compute_rest_props } from "svelte/internal";

  export let block: boolean = false;
  export let disabled: boolean = false;
  export let icon: IconifyIcon = null;
  export let iconPos: "cover" | "leading" | "trailing" = "cover";
  export let loading: boolean = false;
  export let shape: "default" | "pill" | "round" = "default";
  export let size: "lg" | "md" | "sm" = "md";
  export let kind:
    | "danger"
    | "dark"
    | "info"
    | "light"
    | "primary"
    | "secondary"
    | "success"
    | "warning" = "primary";

  const { class: klass, props } = $$props;
</script>

<button
  type="button"
  class={clsx(
    {
      "w-full justify-center": block,
      "opacity-70 pointer-events-none": disabled,
      "flex-col pointer-events-none": loading,
      "p-1.5 text-sm": size === "sm",
      "p-2 text-base": size === "md",
      "p-2.5 text-lg": size === "lg",
      "px-6 rounded-full": shape === "pill",
      "flex items-center justify-center rounded-full align-bottom": shape === "round",
      "h-8 w-8": size === "sm" && shape === "round",
      "h-10 w-10": size === "md" && shape === "round",
      "h-12 w-12": size === "lg" && shape === "round",
    },
    `bg-${kind}-500 hover:bg-${kind}-600`,
    "inline-flex items-center text-white text-center focus:outline-none",
    klass
  )}
  {...props}
>
  {#if loading}
    <Spinner
      class={clsx({
        "h-5 w-5": size === "sm",
        "h-6 w-6": size === "md",
        "h-7 w-7": size === "lg",
      })}
    />

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

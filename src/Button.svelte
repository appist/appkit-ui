<script lang="ts" context="module">
  import type { IconType } from "./Icon.svelte";
</script>

<script lang="ts">
  import clsx from "clsx";
  import Icon from "./Icon.svelte";
  import Spinner from "./Spinner.svelte";

  export let block: boolean = false;
  export let disabled: boolean = false;
  export let icon: IconType = "";
  export let iconPos: "cover" | "leading" | "trailing" = "cover";
  export let iconVariant: "outline" | "solid" = "solid";
  export let loading = false;
  export let shape: "default" | "circle" | "pill" | "round" = "default";
  export let size: "lg" | "md" | "sm" = "md";
  export let type: "primary" | "secondary" | "minimal" = "primary";
</script>

<button
  type="button"
  class={clsx(
    {
      block,
      disabled,
      loading,
      "with-leading-icon": icon && iconPos === "leading" && shape !== "circle",
      "with-tailing-icon": icon && iconPos === "trailing" && shape !== "circle",
    },
    shape,
    size,
    type,
    $$props.class
  )}
  on:click
>
  {#if loading}
    <Spinner />

    <div class="invisible-slot">
      {#if icon !== ""}
        {#if iconPos === "cover"}
          <Icon {icon} variant={iconVariant} />
        {:else if iconPos === "leading"}
          <Icon {icon} variant={iconVariant} />
          <slot />
        {:else if iconPos === "trailing"}
          <slot />
          <Icon {icon} variant={iconVariant} />
        {/if}
      {:else}
        <slot />
      {/if}
    </div>
  {:else if icon !== ""}
    {#if iconPos === "cover"}
      <Icon {icon} variant={iconVariant} />
    {:else if iconPos === "leading"}
      <Icon {icon} variant={iconVariant} />
      <slot />
    {:else if iconPos === "trailing"}
      <slot />
      <Icon {icon} variant={iconVariant} />
    {/if}
  {:else}
    <slot />
  {/if}
</button>

<style global lang="postcss">
  button {
    @apply border border-transparent focus:outline-none inline-flex items-center;

    &.block {
      @apply w-full justify-center;
    }

    &.sm {
      @apply px-2 py-1 text-sm;

      &.circle {
        width: 1.875rem;
        height: 1.875rem;
      }

      &.loading {
        & > svg {
          @apply my-1 h-3 w-3;
        }
      }

      &.with-leading-icon:not(.circle) {
        @apply pr-2.5;
      }

      &.with-trailing-icon:not(.circle) {
        @apply pl-2.5;
      }

      & > svg {
        @apply h-4 w-4;
      }
    }

    &.md {
      @apply px-2.5 py-1.5;

      &.circle {
        width: 2.375rem;
        height: 2.375rem;
      }

      &.loading {
        & > svg {
          @apply my-1 h-4 w-4;
        }
      }

      &.with-leading-icon:not(.circle) {
        @apply pr-3;
      }

      &.with-trailing-icon:not(.circle) {
        @apply pl-3;
      }

      & > svg {
        @apply h-4 w-4;
      }
    }

    &.lg {
      @apply px-2.5 py-2 text-lg;

      &.circle {
        width: 2.875rem;
        height: 2.875rem;
      }

      &.loading {
        & > svg {
          @apply my-1 h-5 w-5;
        }
      }

      &.with-leading-icon:not(.circle) {
        @apply pr-3.5;
      }

      &.with-trailing-icon:not(.circle) {
        @apply pl-3.5;
      }

      & > svg {
        @apply h-5 w-5;
      }
    }

    &.primary {
      @apply bg-brand-500 hover:bg-brand-600 text-white;
    }

    &.secondary {
      @apply bg-brand-200 hover:bg-brand-300 text-brand-500;
    }

    &.minimal {
      @apply text-brand-500;
    }

    &.disabled {
      @apply pointer-events-none bg-gray-100 text-gray-400;
    }

    &.circle {
      @apply rounded-full inline-flex items-center justify-center overflow-hidden align-bottom;
    }

    &.pill {
      @apply rounded-full;
    }

    &.round {
      @apply rounded;
    }

    & > .invisible-slot {
      @apply opacity-0 flex h-0;
    }

    &.loading {
      @apply flex-col pointer-events-none;
    }

    &.with-leading-icon:not(.circle) {
      & > svg {
        @apply mr-1.5;
      }
    }

    &.with-tailing-icon:not(.circle) {
      & > svg {
        @apply ml-1.5;
      }
    }
  }
</style>

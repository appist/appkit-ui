<script lang="ts">
  import clsx from "clsx";

  export let color:
    | "danger"
    | "dark"
    | "info"
    | "light"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "white" = "primary";

  export let size: "lg" | "md" | "sm" = "md";

  const { class: klass, ...props } = $$props;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class={clsx(
    {
      "h-5 w-5": size === "sm",
      "h-6 w-6": size === "md",
      "h-7 w-7": size === "lg",
      "text-primary-500": color === "primary",
      "text-secondary-500": color === "secondary",
      "text-danger-500": color === "danger",
      "text-info-500": color === "info",
      "text-success-500": color === "success",
      "text-warning-500": color === "warning",
      "text-white": color === "white",
    },
    "inline",
    klass
  )}
  fill="none"
  viewBox="0 0 24 24"
  {...props}
>
  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />

  <path
    fill="currentColor"
    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  />
</svg>

<style lang="postcss">
  svg {
    @apply animate-spin;

    & > circle {
      @apply opacity-25;
    }

    & > path {
      @apply opacity-75;
    }
  }
</style>

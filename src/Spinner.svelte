<script lang="ts">
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class={$$props.class}
  style={$$props.style}
  fill="none"
  viewBox="0 0 24 24"
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

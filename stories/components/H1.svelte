<h1 class="font-medium title-font mb-2 text-gray-900">
  <slot />
</h1>

<div class="h-1 w-14 bg-gray-300 rounded mb-4"></div>

<style scoped lang="postcss">
  h1:not(:first-child) {
    @apply mt-8;
  }
</style>
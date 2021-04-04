<script lang="ts">
  import clsx from "clsx";
  import Link from "./Link.svelte";
  import type { IntroImage, IntroLink } from "./types";

  export let shortDesc: string = "";
  export let longDesc: string = "";
  export let images: Array<IntroImage> = [];
  export let links: Array<IntroLink> = [];

  const { class: klass, ...props } = $$props;
</script>

<div class={clsx("px-4 py-16 mx-auto", klass)} {...props}>
  <div class="md:grid md:grid-cols-2 md:gap-10">
    <div class="mx-auto text-center md:text-left">
      <div class="md:py-12">
        <h1 class="text-3xl font-extrabold sm:text-5xl md:text-3xl lg:text-5xl">{shortDesc}</h1>
        <p class="mt-6 text-base text-gray-500 sm:text-lg md:text-base lg:text-lg">{longDesc}</p>

        <div class="space-x-2 mt-10">
          {#each links as { color, href, name, outline }, _}
            <Link {color} {href} {outline}>{name}</Link>
          {/each}
        </div>
      </div>
    </div>

    <!-- TODO: Update this to image carousel when the component is ready. -->
    <div id="img-container" class="flex py-10">
      {#each images as { alt, src }, _}
        <img class="-ml-2 sm:-ml-6 md:ml-0 shadow-lg" {src} {alt} />
      {/each}
    </div>
  </div>
</div>

<style lang="postcss" scoped>
  #img-container {
    perspective: 2000px;
    transform-style: preserve-3d;
    perspective-origin: 0;

    & > img {
      transform: rotateY(-30deg) rotateX(10deg);
    }
  }
</style>

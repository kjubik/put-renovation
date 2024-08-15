<script lang="ts">
    import type { PageData } from './$types';
    import { Section, HeroHeader, HeroBody } from 'flowbite-svelte-blocks';
    import { Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';

    export let data: PageData;

</script>

<Section name="heroDefault">
  <HeroHeader>
      <svelte:fragment slot="h1">Z miłości do klasycznej motoryzacji</svelte:fragment>
      <svelte:fragment slot="paragraph">Nasz warsztat to miejsce, gdzie marzenia o odrestaurowanych pojazdach stają się rzeczywistością, codziennie zbliżając się do naszego celu - osiągnięcia perfekcji w renowacji, budując samochody klasyczne perfekcyjne w każdym detalu.</svelte:fragment>
  </HeroHeader>

  <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
    <a href="/">
      <Button size="lg" color="primary">
        {data.content.primary_buton}
        <ArrowRightOutline size="lg" class="ml-2 -mr-1 pt-1" />
      </Button>
    </a>
    <a href="/">
      <Button size="lg" color="light">
        {data.content.secondary_button}
      </Button>
    </a>
  </div>
  <HeroBody>
    <svelte:fragment slot="head">WSPIERANI PRZEZ</svelte:fragment>
  </HeroBody>
</Section>

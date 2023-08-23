<script setup lang="ts">
const route = useRoute()

const { data: comics, pending: comicsPending, onPageHandler: onComicsPageHandler } = await useCardData(`charachter-${route.params.id}-comics`, getCharachetrRelComics(route.params.id), false)
const { data: series, pending: seriesPending, onPageHandler: onSeriesPageHandler } = await useCardData(`charachter-${route.params.id}-series`, getSeries(route.params.id), false)

definePageMeta({
  middleware: ['guard']
})
</script>

<template>
  <div class="mt-16 flex flex-col gap-10 max-w-7xl mx-auto px-6">
    <NuxtLink
      to="/"
      class="btn btn-primary btn-block"
    >
      Back to main
    </NuxtLink>
    
    <CharacterDetail />

    <div class="divider text-2xl font-bold">
      Comics
    </div>

    <CardData
      :data="comics"
      :pending="comicsPending"
      :on-click-handler="onComicsPageHandler"
    />

    <div class="divider text-2xl font-bold">
      Series
    </div>

    <CardData
      :data="series"
      :pending="seriesPending"
      :on-click-handler="onSeriesPageHandler"
    />
  </div>
</template>

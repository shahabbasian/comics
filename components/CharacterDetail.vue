<script setup lang="ts">
const route = useRoute()

const { data } = await useCardData(`charachter-${route.params.id}`, getCharacters(route.params.id))
</script>

<template>
  <div class="card md:card-side bg-base-200 shadow-xl">
    <Head>
      <Title>{{ data.results[0].name }}</Title>
    </Head>

    <figure class="w-full md:min-w-[25rem] md:max-w-[25rem] h-auto">
      <img
        :src="data.results[0].image"
        :alt="data.results[0].name"
      >
    </figure>
    <div class="card-body">
      <h1 class="card-title">
        {{ data.results[0].name }}
      </h1>
      <p class="text-justify">
        {{ data.results[0].description }}
      </p>
    </div>
  </div>
</template>

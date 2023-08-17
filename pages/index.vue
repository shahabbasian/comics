<script setup lang="ts">
const { data, pending, refresh } = await useAsyncData('characters', () => useApiRequest(getCharacters()), {
  transform: (data: object) => {
    return {
      pagination: {
        offset: data.data.offset,
        limit: data.data.limit,
        total: data.data.total,
        count: data.data.count
      },
      results: data.data.results.map((item: object) => {
        return {
          id: item.id,
          name: item.name,
          description: item.description,
          image: `${item.thumbnail.path}.${item.thumbnail.extension}`
        }
      })
    }
  }
})
</script>

<template>
  <div>
    <TheHero>
      Search
    </TheHero>

    <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
      <div
        class="mb-6"
        @click="refresh"
      >
        Refresh
      </div>

      <div
        v-if="pending"
        class="custom-grid"
      >
        <SkeletonTheCard
          v-for="item in 8"
          :key="item"
        />
      </div>

      <div
        v-else
        class="custom-grid"
      >
        <TheCard
          v-for="item in data.results"
          :key="item.id"
          :image="item.image"
          :name="item.name"
          :description="item.description"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-grid {
  @apply grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8
}
</style>

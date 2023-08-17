<script setup lang="ts">
interface Props {
  data: object;
  pending: boolean;
  characterLink?: boolean;
  onClickHandler: any;
}

withDefaults(defineProps<Props>(), {
  characterLink: false
})

const page = ref(parseInt(useRoute()?.query?.page) || 1)
</script>

<template>
  <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
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
      class="flex flex-col gap-12"
    >
      <div
        v-if="data.results.length > 0"
        class="custom-grid"
      >
        <TheCard
          v-for="item in data.results"
          :id="item.id"
          :key="item.id"
          :image="item.image"
          :name="item.name"
          :description="item.description"
          :character-link="characterLink"
        />
      </div>
      <div
        v-else
        class="text-center"
      >
        Data not found.
      </div>

      <vue-awesome-paginate
        v-if="data.pagination.total > data.pagination.limit"
        v-model="page"
        :total-items="data.pagination.total"
        :items-per-page="data.pagination.limit"
        :max-pages-shown="5"
        :on-click="onClickHandler"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  image: string;
  name: string;
  description?: string;
}

defineProps<Props>()
</script>

<template>
  <div class="card bg-base-200 shadow-xl">
    <figure class="h-52 w-auto">
      <img
        :src="image"
        :alt="name"
      >
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ name }}
      </h2>
      <p class="line-clamp-1">
        {{ description }}
      </p>
    </div>
  </div>
</template>

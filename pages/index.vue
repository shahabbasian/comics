<template>
  <div>
    <TheHero>
      Search
    </TheHero>

    <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <TheCard
          image="https://cdn.marvel.com/content/1x/clean_462.jpg"
          name="3-D Man"
        />
        <SkeletonTheCard
          v-for="item in 8"
          :key="item"
        />
      </div>
    </div>
  </div>
</template>

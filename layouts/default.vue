<template>
  <div>
    <NuxtLoadingIndicator />
    
    <slot />
  </div>
</template>

<style>
.custom-grid {
  @apply grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8
}
.pagination-container {
  @apply flex gap-4
}
.paginate-buttons {
  @apply h-10 w-10 rounded-md cursor-pointer bg-base-300
}
.paginate-buttons:hover {
  @apply bg-secondary text-secondary-content
}
.active-page {
  @apply bg-primary text-primary-content
}
.active-page:hover {
  @apply bg-primary-focus
}
</style>

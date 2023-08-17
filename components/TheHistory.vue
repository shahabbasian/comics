<script setup lang="ts">
const storeHistory = useStoreHistory()
const target = ref(null)

const emit = defineEmits(['close'])

onClickOutside(target, (event) => {
  if (event?.target?.id !== 'search-input') {
    emit('close')
  }
})
</script>

<template>
  <div
    v-if="storeHistory.notEmpty"
    ref="target"
    class="bg-primary text-primary-content flex flex-col gap-2 p-4"
  >
    <div
      v-for="(item, index) in storeHistory.getHistories"
      :key="index"
      class="h-8 flex items-center justify-between cursor-pointer"
    >
      <span>{{ item }}</span>
      <SvgTheTimes
        class="h-5 w-auto"
        @click="storeHistory.removeHistory(index)"
      />
    </div>
    <div
      class="h-8 flex items-center justify-center cursor-pointer"
      @click="storeHistory.removeAllHistories()"
    >
      <span>Remove all histories</span>
    </div>
  </div>
</template>

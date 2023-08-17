<script setup lang="ts">
const { data, pending, onClickHandler } = await useCardData('charachters', getCharacters())
</script>

<template>
  <div>
    <TheHero>
      Search
    </TheHero>

    <CardData
      :data="data"
      :pending="pending"
      :on-click-handler="onClickHandler"
    />
  </div>
</template>

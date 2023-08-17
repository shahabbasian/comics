<script setup lang="ts">
const route = useRoute()

const { data, pending, onPageHandler, onSearchHandler } = await useCardData('charachters', getCharacters())

const nameForSearch = ref(route?.query?.search || '')

const searchHandler = () => {
  onSearchHandler(nameForSearch.value)
}
</script>

<template>
  <div>
    <Head>
      <Title v-if="$route?.query?.page && $route.query.page !== '1'">
        Comics Character - page {{ $route.query.page }}
      </Title>
      <Title v-if="$route?.query?.search">
        Comics Character - search = {{ $route.query.search }}
      </Title>
    </Head>

    <TheHero>
      <div class="join join-vertical md:join-horizontal">
        <div>
          <div>
            <input
              v-model="nameForSearch"
              class="input input-bordered join-item"
              placeholder="Search Character"
              @keypress.enter="searchHandler"
            >
          </div>
        </div>

        <button
          class="btn join-item"
          @click="searchHandler"
        >
          Search
        </button>
      </div>
    </TheHero>

    <CardData
      :data="data"
      :pending="pending"
      :on-click-handler="onPageHandler"
      character-link
    />
  </div>
</template>

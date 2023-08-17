<script setup lang="ts">
const route = useRoute()

const { data, pending, onPageHandler, onSearchHandler } = await useCardData('charachters', getCharacters())

const nameForSearch = ref(route?.query?.search || '')

const searchHandler = () => {
  onSearchHandler(nameForSearch.value)
}

const openHistory = ref(false)
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
          <div class="flex flex-col">
            <input
              id="search-input"
              v-model="nameForSearch"
              class="input input-bordered join-item"
              placeholder="Search Character"
              @keypress.enter="searchHandler"
              @focus="openHistory = true"
            >
            <TheHistory
              v-if="openHistory"
              @close="openHistory = false"
            />
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

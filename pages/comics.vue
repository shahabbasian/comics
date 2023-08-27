<script setup lang="ts">
const route = useRoute()
const storeGuard = useStoreGuard()

const { data, pending, onPageHandler, onSearchHandler } = await useCardData('comics', getComics(), 'comics')

const nameForSearch = ref(route?.query?.search || '')

const searchHandler = () => {
  onSearchHandler(nameForSearch.value)
}

const openHistory = ref(false)

const searchFromHistory = (payload: string) => {
  nameForSearch.value = payload
  searchHandler()
}
</script>

<template>
  <div>
    <Head>
      <Title v-if="$route?.query?.page && $route.query.page !== '1'">
        Comics - page {{ $route.query.page }}
      </Title>
      <Title v-if="$route?.query?.search">
        Comics - search = {{ $route.query.search }}
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
              @search="searchFromHistory"
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

      <div class="mt-4 w-full flex justify-center">
        <div
          class="btn"
          :class="[storeGuard.getPermission ? 'btn-primary' : 'btn-secondary']"
          @click="storeGuard.togglePermission()"
        >
          Permission <span v-if="storeGuard.getPermission">ON</span><span v-else>OFF</span>
        </div>
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

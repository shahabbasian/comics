<template>
  <div>
    <TheHero>
      <div class="join join-vertical md:join-horizontal">
        <div>
          <div>
            <input
              class="input input-bordered join-item"
              placeholder="Search Character"
            >
          </div>
        </div>

        <select class="select select-bordered join-item">
          <option selected>
            Name
          </option>
          <option>Name starts with</option>
        </select>

        <button class="btn join-item">
          Search
        </button>
      </div>
    </TheHero>
  </div>
</template>

<template>
  <div
    class="hero h-[40vh]"
    style="background-image: url(https://cdn.marvel.com/content/1x/clean_462.jpg);"
  >
    <div class="hero-overlay bg-opacity-60" />
    <div class="hero-content text-center text-white">
      <div class="max-w-xl">
        <h1 class="mb-5 text-5xl font-bold">
          This week's new comics
        </h1>
        <p class="mb-5">
          Meet the Dark X-Men, investigate the mystery of Captain Krakoa, see Iron Man battle Storm, and more in this week's comics!
        </p>
        <slot />
      </div>
    </div>
  </div>
</template>
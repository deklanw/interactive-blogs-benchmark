<template>
  <article
    class="min-h-screen flex flex-col items-center justify-between bg-gray-200"
  >
    <article class="m-10 w-1/2 flex justify-around align-top items-middle">
      <header class="text-2xl">
        <router-link to="/">Your Website</router-link>
      </header>

      <nav class="w-40">
        <ul class="flex flex-row justify-around">
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
    </article>

    <main class="flex-grow m-4 w-1/2">
      <slot />
    </main>

    <footer class="p-10">Footer info goes here</footer>
  </article>
</template>
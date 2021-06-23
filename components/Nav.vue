/* eslint-disable prettier/prettier */
<template>
  <div>
    <div class="flex justify-between">
      <nuxt-link to="/" class="flex mt-6 mb-4 mx-7">
        <img src="~/assets/Logo.svg" class="logo-mb" />
      </nuxt-link>
      <SNS class="hidden sm:flex" />
    </div>
    <div class="menu">
      <div class="flex">
        <div class="flex-1 text-center py-4 sm:py-8">About</div>
        <div
          class="flex-1 text-center py-4 sm:py-8 border-l sm:ml-8 sm:border-0"
        >
          Works
        </div>
      </div>
      <div class="flex border-t sm:border-0">
        <div class="flex-1 text-center py-4 sm:py-8 sm:ml-8">Pricing</div>
        <nuxt-link
          to="contact"
          class="flex-1 text-center py-4 sm:py-8 border-l sm:ml-8 sm:border-0"
        >
          Contact
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style>
.logo-mb {
  animation: 1s appear;
  height: 32px;
}
.menu {
  @apply flex flex-col sm:flex-row w-full sm:justify-end border-t border-b sm:border-0 text-xl sm:text-2xl sm:pr-10;
}
@media screen and (min-width: 640px) {
  .logo-mb {
    height: 40px;
  }
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>

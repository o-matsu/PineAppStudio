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
        <nuxt-link
          to="about"
          class="flex-1 text-center py-4 sm:py-8"
          :class="{ isActive: isAbout }"
        >
          About
        </nuxt-link>
        <nuxt-link
          to="works"
          class="flex-1 text-center py-4 sm:py-8 border-l sm:ml-8 sm:border-0"
          :class="{ isActive: isWorks }"
        >
          Works
        </nuxt-link>
      </div>
      <div class="flex border-t sm:border-0">
        <nuxt-link
          to="pricing"
          class="flex-1 text-center py-4 sm:py-8 sm:ml-8"
          :class="{ isActive: isPricing }"
          >Pricing</nuxt-link
        >
        <nuxt-link
          to="contact"
          class="flex-1 text-center py-4 sm:py-8 border-l sm:ml-8 sm:border-0"
          :class="{ isActive: isContact }"
        >
          Contact
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thisPage: '/',
    }
  },
  computed: {
    isAbout() {
      return this.$route.name === 'about'
    },
    isWorks() {
      return this.$route.name === 'works'
    },
    isPricing() {
      return this.$route.name === 'pricing'
    },
    isContact() {
      return this.$route.name === 'contact'
    },
  },
}
</script>

<style scoped>
.logo-mb {
  animation: 1s appear;
  height: 32px;
}
.menu {
  @apply flex flex-col sm:flex-row w-full sm:justify-end border-t border-b sm:border-0 text-xl sm:text-2xl sm:pr-10;
}
.isActive {
  background-color: #e0e0e0;
  color: white;
}

@media screen and (min-width: 640px) {
  .logo-mb {
    height: 40px;
  }
  a:hover {
    color: #e0e0e0;
  }
  .isActive {
    background-color: white;
    color: #e0e0e0;
  }
}
</style>

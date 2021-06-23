<template>
  <div>
    <div class="flex mt-5 mb-3 mx-7">
      <img src="~/assets/Logo.svg" class="logo-mb" />
    </div>
    <div class="flex flex-col w-full border-t border-b text-xl">
      <div class="flex">
        <div class="flex-1 text-center py-4">About</div>
        <div class="flex-1 text-center py-4 border-l">Works</div>
      </div>
      <div class="flex border-t">
        <div class="flex-1 text-center py-4">Pricing</div>
        <div class="flex-1 text-center py-4 border-l">Contact</div>
      </div>
    </div>
  </div>
</template>

<style>
.logo-mb {
  animation: 1s appear;
  height: 32px;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>

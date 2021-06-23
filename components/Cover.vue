<template>
  <div class="relative">
    <img src="~/assets/IMG_4202_res.png" class="cover-mb sm:hidden" />
    <img src="~/assets/_5053664-1.JPG" class="cover-pc hidden sm:block" />
    <div class="balloon-wrapper flex flex-col justify-around">
      <div class="balloon ml-8 mr-auto">
        <p>WEBシステムやモバイルアプリの</p>
        <p>受託開発を行っています</p>
      </div>
      <div class="balloon mx-auto">フリーランスのシステムエンジニアです</div>
      <div class="balloon ml-auto mr-8">
        <p>要件定義〜運用まで</p>
        <p>一貫して対応いたします</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.cover-mb {
  /* height: 380px; */
  width: 100%;
  object-fit: cover;
}
.cover-pc {
  height: 380px;
  width: 100%;
  object-fit: cover;
}
.balloon-wrapper {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
}
.balloon {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0px 10px 10px 10px;
  padding: 7px 14px;
  color: black;
}
@media screen and (min-width: 640px) {
  /* 960px以上に適用されるCSS（PC用） */
  .balloon-wrapper {
    width: 50%;
  }
  .balloon {
    font-size: 14px;
  }
}
</style>

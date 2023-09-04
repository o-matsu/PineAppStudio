<template>
  <div class="relative">
    <img src="~/assets/IMG_4202_res.jpg" class="cover-mb sm:hidden" />
    <img src="~/assets/_5053664-1.JPG" class="cover-pc hidden sm:block" />
    <div class="balloon-wrapper flex flex-col justify-around">
      <div class="balloon balloon-rb mx-auto">
        <p>WEBシステム、モバイルアプリの</p>
        <p>開発を行っています</p>
      </div>
      <div class="balloon balloon-rt ml-8 mr-auto">
        フリーランスのシステムエンジニアです
      </div>
      <div class="balloon balloon-rt mx-auto">
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
  right: 0px;
  height: 100%;
  width: 100%;
}
.balloon {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0px 10px 10px 10px;
  padding: 7px 14px;
  color: black;
  animation: 3s appear;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.3);
}
.balloon-rt {
  border-radius: 10px 0px 10px 10px;
}
.balloon-rb {
  border-radius: 10px 10px 0px 10px;
}
@media screen and (min-width: 640px) {
  .balloon-wrapper {
    width: 50%;
    margin: 0 auto;
  }
  .balloon {
    font-size: 14px;
  }
}
</style>

<template>
  <div class="relative">
    <img src="~/assets/IMG_4202_res.png" class="cover-mb" />
    <div class="balloon balloon-t-mb">
      <p>WEBシステムやモバイルアプリの</p>
      <p>受託開発を行っています</p>
    </div>
    <div class="balloon balloon-m-mb">フリーランスのシステムエンジニアです</div>
    <div class="balloon balloon-b-mb">
      <p>要件定義〜運用まで</p>
      <p>一貫して対応いたします</p>
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
.balloon {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0px 10px 10px 10px;
  padding: 7px 14px;
  color: black;
}
.balloon-t-mb {
  position: absolute;
  top: 21px;
  left: 21px;
}
.balloon-m-mb {
  position: absolute;
  top: 170px;
  left: 60px;
}
.balloon-b-mb {
  position: absolute;
  bottom: 30px;
  right: 21px;
}
</style>

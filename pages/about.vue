<template>
  <div>
    <div class="container mx-auto">
      <div class="sm:hidden">
        <SNS />
        <hr class="mx-auto" />
      </div>
      <div class="flex flex-col mx-8 sm:mx-auto sm:max-w-2xl">
        <div class="h1sub mt-12 mb-2 mx-auto">about</div>
        <div class="h1 mb-6 mx-auto">Ryosuke Matsushita</div>
        <div class="h2 mt-12 mx-auto">略歴</div>
        <div class="mt-8 text-sm">
          <p>長野にて、フリーランスでシステムエンジニアをしています。</p>
          <p>大学在学中、学内の研究所でWEBシステム開発のアルバイトを経験。</p>
          <p>2019年より副業でWEBシステムの受託開発を始める。</p>
          <p>2021年、フリーランスとして活動開始。</p>
          <p>2022年、活動拠点を長野へ移す。</p>

          <p class="mt-4">
            前職は、全国および海外に拠点をもつ建築会社（1万人規模）の本社IT部門で、ITインフラ（PCやメール、Microsoft365等）の企画・導入〜運用を5年間担当していました。この経験から、発注者側の目線で運用を見据えたシステムの構築を心がけています。
          </p>
        </div>
        <div class="h2 mt-12 mx-auto">プライベート</div>
        <div class="mt-8 mb-12 text-sm">
          <p>1991年、大阪生まれ。O型。</p>
          <p>
            趣味は家庭菜園、養蜂、登山、キャンプ、スノーボード、旅行、温泉。アウトドア活動が全般的に大好きです。
          </p>
          <p>
            自然に囲まれた生活に憧れ、長野県へ移住しました。現在、古民家のDIY改修に奮闘中。
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.h1 {
  font-family: ABeeZee;
  font-style: italic;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
}
</style>

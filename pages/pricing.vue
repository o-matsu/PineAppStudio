<template>
  <div>
    <div class="container mx-auto">
      <div class="sm:hidden">
        <SNS />
        <hr class="mx-auto" />
      </div>
      <div class="flex">
        <div class="h1 mx-auto mt-12 mb-6">Pricing</div>
      </div>
      <div class="mt-12 mx-8 text-sm sm:mx-auto sm:max-w-2xl">
        <p>
          以下はご参考価格です。実際の価格はご要望にもとづいて個別にお見積もりいたしますので、変動する可能性があります。
        </p>
        <p>
          また、準委任での稼働実績ベースの支払いなど契約形態もご相談に応じて対応いたします。
        </p>
      </div>
      <div class="h2 mt-12 mx-8 sm:mx-auto sm:max-w-2xl">システム開発</div>
      <div class="mx-8 sm:mx-auto sm:max-w-2xl">
        <div class="py-4 flex justify-between items-center border-b">
          <div class="font-semibold w-48">要件定義・設計</div>
          <div class="text-sm w-28">1ヶ月ほど</div>
          <div class="text-right w-28">3~30万円</div>
        </div>
        <div class="py-4 flex justify-between items-center border-b">
          <div class="font-semibold w-48">開発（WEBシステム）</div>
          <div class="text-sm w-28">1ヶ月ほど</div>
          <div class="text-right w-28">10~100万円</div>
        </div>
        <div class="py-4 flex justify-between items-center border-b">
          <div class="font-semibold w-48">開発（モバイルアプリ）</div>
          <div class="text-sm w-28">2ヶ月ほど</div>
          <div class="text-right w-28">20~150万円</div>
        </div>
        <div class="py-4 flex justify-between items-center border-b">
          <div class="font-semibold w-48">利用状況分析</div>
          <div class="text-sm w-28">1ヶ月ほど</div>
          <div class="text-right w-28">2~20万円</div>
        </div>
        <div class="py-4 flex justify-between items-center border-b">
          <div class="font-semibold w-48">運用保守</div>
          <div class="text-sm w-28"></div>
          <div class="text-right w-28">2~10万円</div>
        </div>
      </div>
      <div class="h2 mt-8 mx-8 sm:mx-auto sm:max-w-2xl">ツール開発</div>
      <div class="mx-8 sm:mx-auto sm:max-w-2xl">
        <div class="py-4 flex justify-between items-center border-b">
          <div class="font-semibold w-48">SNS運用ツール</div>
          <div class="text-sm w-28">1ヶ月ほど</div>
          <div class="text-right w-28">10~30万円</div>
        </div>
        <div class="py-4 flex justify-between items-center border-b">
          <div class="font-semibold w-48">スクレイピングツール</div>
          <div class="text-sm w-28">1ヶ月ほど</div>
          <div class="text-right w-28">5~20万円</div>
        </div>
      </div>
      <div class="h2 mt-8 mx-8 sm:mx-auto sm:max-w-2xl">その他</div>
      <div class="mx-8 sm:mx-auto sm:max-w-2xl">
        <div class="py-4 flex justify-between items-center border-b">
          <div class="font-semibold w-48">画像素材作成</div>
          <div class="text-sm w-28"></div>
          <div class="text-right w-28">0.5~2万円</div>
        </div>
        <div class="py-4 flex justify-between items-center border-b">
          <div class="font-semibold w-48">写真撮影</div>
          <div class="text-sm w-28">出張対応</div>
          <div class="text-right w-28">2万円~</div>
        </div>
        <div class="py-4 flex justify-between items-center border-b">
          <div class="font-semibold w-48">動画撮影</div>
          <div class="text-sm w-28">出張対応</div>
          <div class="text-right w-28">5万円~</div>
        </div>
        <div class="py-4 flex justify-between items-center border-b">
          <div class="font-semibold w-48">写真編集</div>
          <div class="text-sm w-28"></div>
          <div class="text-right w-28">1~2万円</div>
        </div>
        <div class="py-4 flex justify-between items-center border-b">
          <div class="font-semibold w-48">動画編集</div>
          <div class="text-sm w-28"></div>
          <div class="text-right w-28">3~6万円</div>
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

<template>
  <div>
    <div class="container mx-auto">
      <div class="sm:hidden">
        <SNS />
        <hr class="mx-auto" />
      </div>
      <div class="flex flex-col mx-8 sm:mx-auto sm:max-w-2xl">
        <div class="h1 mx-auto mt-12 mb-6">Works</div>
        <div class="h2 mt-12 mx-auto">スキル</div>
        <div class="h3 mt-8 mx-auto">プログラミング</div>
        <div class="mt-4 text-sm">
          <p>
            WEBシステム開発はフロントエンド（Vue.js）、バックエンド（Firebase、Laravel）ともに対応いたします。
          </p>
          <p>
            モバイルアプリはクロスプラットフォーム開発（Flutter）でiOS/Android対応しています。
          </p>
          <p>
            また、Twitter等SNSの自動運用ツール、スクレイピングツールの開発も対応いたします。
          </p>
        </div>
        <div class="my-4 flex justify-around items-center">
          <img src="~/assets/nuxt.svg" />
          <img src="~/assets/Vue.svg" />
          <img src="~/assets/firebase.svg" />
          <img src="~/assets/Laravel.svg" />
          <img src="~/assets/Flutter.svg" />
        </div>
        <div class="h3 mt-8 mx-auto">その他</div>
        <div class="mt-4 text-sm">
          <p>ロゴなど画像素材制作の他、写真や動画の撮影・編集も行えます。</p>
          <p>必要に応じて、出張対応もいたします。</p>
        </div>
        <div class="my-4 flex justify-around items-center">
          <img src="~/assets/Figma.svg" />
          <img src="~/assets/Photoshop.svg" />
          <img src="~/assets/Lightroom.svg" />
          <img src="~/assets/Davinci.svg" />
        </div>
      </div>
      <div class="flex flex-col">
        <div class="h2 mt-12 mx-auto">実績</div>
        <div class="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between">
          <div class="card mt-8 mx-auto">
            <img src="~/assets/Ondoku.jpg" class="Ondoku" />
            <div class="label p-4">
              <div class="h3">語学学習のための発音練習システム</div>
              <div class="text-sm mt-1">
                自分で作った教材、人が作った教材で中国語の音読練習ができる
                ウェブ学習サービスを開発。MAU 5.5K、月間17万PV。
                全国の大学でリモート授業にご活用頂いています。
              </div>
              <div class="flex mt-2">
                <div class="tag mr-4"># Vue.js</div>
                <div class="tag mr-4"># Laravel</div>
                <div class="tag mr-4"># Mecab</div>
                <div class="tag mr-4"># WebSpeechAPI</div>
              </div>
            </div>
          </div>
          <div class="card mt-8 mx-auto">
            <img src="~/assets/TwitterAutomate.jpg" class="Ondoku" />
            <div class="label p-4">
              <div class="h3">Twitter自動運用ツール</div>
              <div class="text-sm mt-1">
                自身のツイート内容に関心の高いユーザーを自動抽出し、フォロー・いいねを行うツールを開発。
                運用効果として、毎月100フォロワー増を半年間継続中。
              </div>
              <div class="flex mt-2">
                <div class="tag mr-4"># Python</div>
                <div class="tag mr-4"># Selenium</div>
                <div class="tag mr-4"># GCP</div>
                <div class="tag mr-4"># Cloud Functioins</div>
              </div>
            </div>
          </div>
          <div class="card mt-8 mx-auto">
            <img src="~/assets/Kochuken.jpg" class="Ondoku" />
            <div class="label p-4">
              <div class="h3">WordPressカスタマイズ</div>
              <div class="text-sm mt-1">
                既存のWordpressテーマをカスタマイズして、デザインの調整と独自機能を実装。
                通常のWordpressにはない、人材の公募機能を追加しました。
              </div>
              <div class="flex mt-2">
                <div class="tag mr-4"># WordPress</div>
                <div class="tag mr-4"># PHP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.card {
  position: relative;
  width: 319px;
  height: 212px;
  left: 0px;
  top: 0px;

  /* Gray 5 */

  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 0px 10px 10px 10px;
  overflow: hidden;
}
.label {
  position: absolute;
  width: 319px;
  height: 116px;
  left: 0px;
  top: 96px;

  background: #e0e0e0;
  border-radius: 0px 10px 10px 10px;
}
.tag {
  padding: 1px 10px 3px 6px;
  border-radius: 0px 10px 10px 10px;
  background: #ffffff;
  color: #828282;

  font-family: Oswald;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
}
</style>

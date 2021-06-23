<template>
  <div>
    <Cover />
    <div class="container mx-auto">
      <div class="sm:hidden">
        <SNS />
        <hr class="mx-auto" />
      </div>
      <div class="flex">
        <div class="h2 mx-auto mt-12 mb-6">主な事業内容</div>
      </div>
      <div class="flex flex-col items-center sm:flex-row sm:items-start">
        <div class="my-6 flex flex-col items-center sm:flex-1">
          <img src="~/assets/image1.svg" />
          <div class="h3 my-4">要件定義・設計</div>
          <div class="mx-8 text-sm">
            ご要望をもとに、お客様の成果に繋がる仕組みを具体化していきます。
            ただ単にシステムを作るのではなく、目標達成に何が必要か、その為の過程も計画に落とし込みます。ご予算も踏まえて費用対効果の高い施策を広い視点でご提案いたします。
          </div>
        </div>
        <div class="my-6 flex flex-col items-center sm:flex-1">
          <img src="~/assets/image2.svg" />
          <div class="h3 my-4">開発</div>
          <div class="mx-8 text-sm">
            使いやすさを第一に、シンプルなデザインのシステムを開発します。
            運用開始後のコストが抑えられる、クラウドベースの開発を得意としています。開発過程では、お客様との認識齟齬を起こさないようスケジュールや課題を常に共有し、進捗状況を逐一ご報告します。
          </div>
        </div>
        <div class="my-6 flex flex-col items-center sm:flex-1">
          <img src="~/assets/image3.svg" />
          <div class="h3 my-4">運用・改善</div>
          <div class="mx-8 text-sm">
            実際に使い始めてから発生する、新たなご要望や問題点にあわせてシステムを改善していきます。また、利用者様からのフィードバックに留まらず、利用ログの分析による改善案もご提案いたします。
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

<style>
.h2 {
  background: #4f4f4f;
  color: white;
  border-radius: 0px 20px 20px 20px;
  padding: 8px 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
}
.h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
}
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>

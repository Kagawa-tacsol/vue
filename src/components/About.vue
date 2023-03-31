<template>
<div class="part">
  <h1>私の強み</h1>
  <h2 @click="Open('isOpen')">コミュニケーション能力 [{{isOpen ? '-' : '+'}}]</h2>
  <h3 v-if="isOpen">ボランティア活動などで培った高いコミュニケーション能力を活かし、積極的に信頼関係を築いていくことで連携をスムーズにとれるよう心掛けています。</h3>
<br>　
  <h2 @click="Open('isOpen2')">発想力 [{{isOpen2 ? '-' : '+'}}]</h2>
  <h3 v-if="isOpen2">趣味の推理小説やゲームで鍛えたひらめきと物事を順序立てて整理する力が自慢でフローチャートを考えるのは自信があります</h3>

</div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      isOpen2: false
    }
  },
  methods: {
    Open(flag) {
        this[flag]=!this[flag]
    }
  }
}
</script>
<style>
.part{
    margin:0 15%;
    text-align:left;
}
</style>
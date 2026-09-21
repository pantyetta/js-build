<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01583B, calcu00369B, calcu00631A } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu01583B(seed) - calcu00369B(seed) + calcu00631A(seed));
</script>

<template>
  <div class="blk">comp01391: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(272 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(92 50% 50%);
  display: inline-block;
}
</style>

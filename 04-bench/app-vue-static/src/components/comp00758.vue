<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00754B, calcu00756A, calcu00059B, calcu00952B, calcu01182A } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu00754B(seed) - calcu00756A(seed) + calcu00059B(seed) - calcu00952B(seed) + calcu01182A(seed));
</script>

<template>
  <div class="blk">comp00758: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(167 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(347 50% 50%);
  display: inline-block;
}
</style>

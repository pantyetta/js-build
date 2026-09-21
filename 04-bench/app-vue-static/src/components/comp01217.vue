<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00967B, calcu00462A, calcu00351B } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu00967B(seed) - calcu00462A(seed) + calcu00351B(seed));
</script>

<template>
  <div class="blk">comp01217: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(255 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(75 50% 50%);
  display: inline-block;
}
</style>

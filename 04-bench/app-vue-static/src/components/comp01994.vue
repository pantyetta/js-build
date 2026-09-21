<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00985B, calcu00691B, calcu00191B, calcu01441A, calcu00686B } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu00985B(seed) - calcu00691B(seed) + calcu00191B(seed) - calcu01441A(seed) + calcu00686B(seed));
</script>

<template>
  <div class="blk">comp01994: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(213 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(33 50% 50%);
  display: inline-block;
}
</style>

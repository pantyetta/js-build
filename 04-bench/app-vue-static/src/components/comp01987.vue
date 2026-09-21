<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00913B, calcu01350A, calcu00816B, calcu01229A } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00913B(seed) - calcu01350A(seed) + calcu00816B(seed) - calcu01229A(seed));
</script>

<template>
  <div class="blk">comp01987: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(285 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(105 50% 50%);
  display: inline-block;
}
</style>

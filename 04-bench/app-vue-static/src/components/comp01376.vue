<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01269A, calcu01320B, calcu01492A, calcu01304A, calcu00077B } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu01269A(seed) - calcu01320B(seed) + calcu01492A(seed) - calcu01304A(seed) + calcu00077B(seed));
</script>

<template>
  <div class="blk">comp01376: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(184 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(4 50% 50%);
  display: inline-block;
}
</style>

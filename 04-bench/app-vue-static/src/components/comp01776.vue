<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00508B, calcu00916B, calcu01427B, calcu01208A, calcu00550A } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu00508B(seed) - calcu00916B(seed) + calcu01427B(seed) - calcu01208A(seed) + calcu00550A(seed));
</script>

<template>
  <div class="blk">comp01776: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(164 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(344 50% 50%);
  display: inline-block;
}
</style>

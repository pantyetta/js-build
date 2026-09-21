<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01092B, calcu00844A, calcu01068A, calcu00081B, calcu00933A } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu01092B(seed) - calcu00844A(seed) + calcu01068A(seed) - calcu00081B(seed) + calcu00933A(seed));
</script>

<template>
  <div class="blk">comp01090: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(56 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(236 50% 50%);
  display: inline-block;
}
</style>

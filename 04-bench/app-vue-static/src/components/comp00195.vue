<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01299A, calcu00793B, calcu01253B, calcu00829B, calcu00472A } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu01299A(seed) - calcu00793B(seed) + calcu01253B(seed) - calcu00829B(seed) + calcu00472A(seed));
</script>

<template>
  <div class="blk">comp00195: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(179 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(359 50% 50%);
  display: inline-block;
}
</style>

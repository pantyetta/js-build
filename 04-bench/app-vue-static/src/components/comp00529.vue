<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01168A, calcu00525A, calcu01332B, calcu00112B, calcu01472A } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu01168A(seed) - calcu00525A(seed) + calcu01332B(seed) - calcu00112B(seed) + calcu01472A(seed));
</script>

<template>
  <div class="blk">comp00529: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(143 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(323 50% 50%);
  display: inline-block;
}
</style>

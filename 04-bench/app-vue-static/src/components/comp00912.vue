<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00661B, calcu01579B, calcu00198A, calcu00176A, calcu00879A } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00661B(seed) - calcu01579B(seed) + calcu00198A(seed) - calcu00176A(seed) + calcu00879A(seed));
</script>

<template>
  <div class="blk">comp00912: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(257 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(77 50% 50%);
  display: inline-block;
}
</style>

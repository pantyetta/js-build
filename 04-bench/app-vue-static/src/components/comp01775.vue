<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00381B, calcu00644B, calcu01219A, calcu00062A, calcu01347A } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00381B(seed) - calcu00644B(seed) + calcu01219A(seed) - calcu00062A(seed) + calcu01347A(seed));
</script>

<template>
  <div class="blk">comp01775: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(307 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(127 50% 50%);
  display: inline-block;
}
</style>

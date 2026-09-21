<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01253A, calcu00375A, calcu00594A, calcu00247A, calcu00036A } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu01253A(seed) - calcu00375A(seed) + calcu00594A(seed) - calcu00247A(seed) + calcu00036A(seed));
</script>

<template>
  <div class="blk">comp01593: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(140 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(320 50% 50%);
  display: inline-block;
}
</style>

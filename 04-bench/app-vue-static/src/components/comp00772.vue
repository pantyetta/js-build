<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01363A, calcu00092A, calcu01021B, calcu01423B, calcu00111B } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu01363A(seed) - calcu00092A(seed) + calcu01021B(seed) - calcu01423B(seed) + calcu00111B(seed));
</script>

<template>
  <div class="blk">comp00772: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(195 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(15 50% 50%);
  display: inline-block;
}
</style>

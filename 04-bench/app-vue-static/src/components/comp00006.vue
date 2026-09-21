<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01043A, calcu00929A, calcu00910A, calcu01522B } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu01043A(seed) - calcu00929A(seed) + calcu00910A(seed) - calcu01522B(seed));
</script>

<template>
  <div class="blk">comp00006: {{ total }}</div>
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

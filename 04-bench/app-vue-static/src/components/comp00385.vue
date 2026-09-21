<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00708B, calcu00310A, calcu00235B, calcu00160B } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu00708B(seed) - calcu00310A(seed) + calcu00235B(seed) - calcu00160B(seed));
</script>

<template>
  <div class="blk">comp00385: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(295 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(115 50% 50%);
  display: inline-block;
}
</style>

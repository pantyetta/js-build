<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00659B, calcu01067A, calcu00679A, calcu01362B } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu00659B(seed) - calcu01067A(seed) + calcu00679A(seed) - calcu01362B(seed));
</script>

<template>
  <div class="blk">comp00247: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(93 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(273 50% 50%);
  display: inline-block;
}
</style>

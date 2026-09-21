<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00247A, calcu01088A, calcu00009B } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu00247A(seed) - calcu01088A(seed) + calcu00009B(seed));
</script>

<template>
  <div class="blk">comp01937: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(122 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(302 50% 50%);
  display: inline-block;
}
</style>

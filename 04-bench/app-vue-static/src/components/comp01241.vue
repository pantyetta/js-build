<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01351A, calcu00319B, calcu01532B, calcu00277A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu01351A(seed) - calcu00319B(seed) + calcu01532B(seed) - calcu00277A(seed));
</script>

<template>
  <div class="blk">comp01241: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(149 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(329 50% 50%);
  display: inline-block;
}
</style>

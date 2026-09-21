<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00115A, calcu01086A, calcu01477A, calcu00869B } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00115A(seed) - calcu01086A(seed) + calcu01477A(seed) - calcu00869B(seed));
</script>

<template>
  <div class="blk">comp01586: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(159 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(339 50% 50%);
  display: inline-block;
}
</style>

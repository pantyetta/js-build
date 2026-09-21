<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01165A, calcu00327B, calcu01238B } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu01165A(seed) - calcu00327B(seed) + calcu01238B(seed));
</script>

<template>
  <div class="blk">comp01697: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(321 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(141 50% 50%);
  display: inline-block;
}
</style>

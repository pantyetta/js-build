<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00474A, calcu01077A, calcu00126B, calcu00893B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu00474A(seed) - calcu01077A(seed) + calcu00126B(seed) - calcu00893B(seed));
</script>

<template>
  <div class="blk">comp00457: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(41 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(221 50% 50%);
  display: inline-block;
}
</style>

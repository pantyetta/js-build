<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00416B, calcu01215A, calcu00873A } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu00416B(seed) - calcu01215A(seed) + calcu00873A(seed));
</script>

<template>
  <div class="blk">comp00228: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(252 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(72 50% 50%);
  display: inline-block;
}
</style>

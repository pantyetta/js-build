<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01396B, calcu00103A, calcu00766A, calcu01129B } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu01396B(seed) - calcu00103A(seed) + calcu00766A(seed) - calcu01129B(seed));
</script>

<template>
  <div class="blk">comp01663: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(165 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(345 50% 50%);
  display: inline-block;
}
</style>

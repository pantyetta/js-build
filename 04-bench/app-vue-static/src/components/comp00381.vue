<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00386B, calcu00039B, calcu01347A, calcu00946A } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu00386B(seed) - calcu00039B(seed) + calcu01347A(seed) - calcu00946A(seed));
</script>

<template>
  <div class="blk">comp00381: {{ total }}</div>
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

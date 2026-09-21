<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00927A, calcu01406B, calcu00012B, calcu01218B } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00927A(seed) - calcu01406B(seed) + calcu00012B(seed) - calcu01218B(seed));
</script>

<template>
  <div class="blk">comp00969: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(120 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(300 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01349A, calcu00389B, calcu01548B, calcu00220B } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu01349A(seed) - calcu00389B(seed) + calcu01548B(seed) - calcu00220B(seed));
</script>

<template>
  <div class="blk">comp00055: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(281 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(101 50% 50%);
  display: inline-block;
}
</style>

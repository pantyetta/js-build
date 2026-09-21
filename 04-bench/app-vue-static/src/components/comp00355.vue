<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00331A, calcu00837B, calcu01052B, calcu01472A } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00331A(seed) - calcu00837B(seed) + calcu01052B(seed) - calcu01472A(seed));
</script>

<template>
  <div class="blk">comp00355: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(186 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(6 50% 50%);
  display: inline-block;
}
</style>

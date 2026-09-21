<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01242B, calcu00775A, calcu01093A } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu01242B(seed) - calcu00775A(seed) + calcu01093A(seed));
</script>

<template>
  <div class="blk">comp01625: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(183 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(3 50% 50%);
  display: inline-block;
}
</style>

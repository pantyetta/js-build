<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01289B, calcu00130B, calcu00367A, calcu00678B } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu01289B(seed) - calcu00130B(seed) + calcu00367A(seed) - calcu00678B(seed));
</script>

<template>
  <div class="blk">comp01274: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(246 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(66 50% 50%);
  display: inline-block;
}
</style>

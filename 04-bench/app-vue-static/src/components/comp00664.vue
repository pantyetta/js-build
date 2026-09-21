<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00563B, calcu00952A, calcu00996A, calcu00780B, calcu00972B } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu00563B(seed) - calcu00952A(seed) + calcu00996A(seed) - calcu00780B(seed) + calcu00972B(seed));
</script>

<template>
  <div class="blk">comp00664: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(0 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(180 50% 50%);
  display: inline-block;
}
</style>

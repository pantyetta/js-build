<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00152A, calcu00084B, calcu01324B, calcu01567B } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu00152A(seed) - calcu00084B(seed) + calcu01324B(seed) - calcu01567B(seed));
</script>

<template>
  <div class="blk">comp01261: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(93 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(273 50% 50%);
  display: inline-block;
}
</style>

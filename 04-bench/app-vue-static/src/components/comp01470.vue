<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00977B, calcu00813B, calcu01372A, calcu01337A } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu00977B(seed) - calcu00813B(seed) + calcu01372A(seed) - calcu01337A(seed));
</script>

<template>
  <div class="blk">comp01470: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(349 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(169 50% 50%);
  display: inline-block;
}
</style>

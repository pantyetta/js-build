<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01419B, calcu00186B, calcu00395A, calcu00352A } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu01419B(seed) - calcu00186B(seed) + calcu00395A(seed) - calcu00352A(seed));
</script>

<template>
  <div class="blk">comp00411: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(315 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(135 50% 50%);
  display: inline-block;
}
</style>

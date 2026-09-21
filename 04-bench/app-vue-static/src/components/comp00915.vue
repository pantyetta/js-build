<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00031B, calcu00367B, calcu01217B, calcu01478B, calcu00469B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00031B(seed) - calcu00367B(seed) + calcu01217B(seed) - calcu01478B(seed) + calcu00469B(seed));
</script>

<template>
  <div class="blk">comp00915: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(287 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(107 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00157B, calcu01246B, calcu00601B, calcu00609B, calcu00953A } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00157B(seed) - calcu01246B(seed) + calcu00601B(seed) - calcu00609B(seed) + calcu00953A(seed));
</script>

<template>
  <div class="blk">comp01772: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(331 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(151 50% 50%);
  display: inline-block;
}
</style>

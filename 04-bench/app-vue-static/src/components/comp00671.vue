<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00019B, calcu01339B, calcu00614A } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu00019B(seed) - calcu01339B(seed) + calcu00614A(seed));
</script>

<template>
  <div class="blk">comp00671: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(261 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(81 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01587B, calcu00792B, calcu01092B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu01587B(seed) - calcu00792B(seed) + calcu01092B(seed));
</script>

<template>
  <div class="blk">comp00181: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(67 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(247 50% 50%);
  display: inline-block;
}
</style>

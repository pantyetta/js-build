<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01573B, calcu00229B, calcu00317B } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu01573B(seed) - calcu00229B(seed) + calcu00317B(seed));
</script>

<template>
  <div class="blk">comp00869: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(310 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(130 50% 50%);
  display: inline-block;
}
</style>

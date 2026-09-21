<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00157B, calcu01389B, calcu00120B } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu00157B(seed) - calcu01389B(seed) + calcu00120B(seed));
</script>

<template>
  <div class="blk">comp00444: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(348 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(168 50% 50%);
  display: inline-block;
}
</style>

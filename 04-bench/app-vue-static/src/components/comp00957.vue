<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00031B, calcu01335B, calcu01074B } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu00031B(seed) - calcu01335B(seed) + calcu01074B(seed));
</script>

<template>
  <div class="blk">comp00957: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(59 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(239 50% 50%);
  display: inline-block;
}
</style>

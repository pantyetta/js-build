<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00128B, calcu00763B, calcu00721B } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu00128B(seed) - calcu00763B(seed) + calcu00721B(seed));
</script>

<template>
  <div class="blk">comp01653: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(110 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(290 50% 50%);
  display: inline-block;
}
</style>

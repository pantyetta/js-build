<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00831B, calcu00439B, calcu00369B } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu00831B(seed) - calcu00439B(seed) + calcu00369B(seed));
</script>

<template>
  <div class="blk">comp00834: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(82 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(262 50% 50%);
  display: inline-block;
}
</style>

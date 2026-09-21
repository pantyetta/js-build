<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00619B, calcu00370B, calcu00647B, calcu00471B } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu00619B(seed) - calcu00370B(seed) + calcu00647B(seed) - calcu00471B(seed));
</script>

<template>
  <div class="blk">comp00744: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(158 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(338 50% 50%);
  display: inline-block;
}
</style>

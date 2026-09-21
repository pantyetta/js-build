<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01270B, calcu00154B, calcu00610B, calcu00078B } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu01270B(seed) - calcu00154B(seed) + calcu00610B(seed) - calcu00078B(seed));
</script>

<template>
  <div class="blk">comp01714: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(239 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(59 50% 50%);
  display: inline-block;
}
</style>

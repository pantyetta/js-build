<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00432B, calcu00798B, calcu00748B, calcu01358B } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00432B(seed) - calcu00798B(seed) + calcu00748B(seed) - calcu01358B(seed));
</script>

<template>
  <div class="blk">comp00850: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(316 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(136 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00227A, calcu00034B, calcu00924B, calcu01073B } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu00227A(seed) - calcu00034B(seed) + calcu00924B(seed) - calcu01073B(seed));
</script>

<template>
  <div class="blk">comp00659: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(349 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(169 50% 50%);
  display: inline-block;
}
</style>

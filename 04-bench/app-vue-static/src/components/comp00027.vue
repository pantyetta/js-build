<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01429B, calcu01449B, calcu00029B, calcu01479B, calcu00429B } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu01429B(seed) - calcu01449B(seed) + calcu00029B(seed) - calcu01479B(seed) + calcu00429B(seed));
</script>

<template>
  <div class="blk">comp00027: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(305 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(125 50% 50%);
  display: inline-block;
}
</style>

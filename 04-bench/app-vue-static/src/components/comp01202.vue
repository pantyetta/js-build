<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00064B, calcu00093B, calcu01236B, calcu00111B, calcu00744B } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu00064B(seed) - calcu00093B(seed) + calcu01236B(seed) - calcu00111B(seed) + calcu00744B(seed));
</script>

<template>
  <div class="blk">comp01202: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(209 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(29 50% 50%);
  display: inline-block;
}
</style>

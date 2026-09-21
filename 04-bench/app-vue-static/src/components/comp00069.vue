<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00534B, calcu00043B, calcu00038A, calcu00366B, calcu00609B } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu00534B(seed) - calcu00043B(seed) + calcu00038A(seed) - calcu00366B(seed) + calcu00609B(seed));
</script>

<template>
  <div class="blk">comp00069: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(335 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(155 50% 50%);
  display: inline-block;
}
</style>

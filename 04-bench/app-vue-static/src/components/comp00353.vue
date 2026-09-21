<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00590A, calcu00171B, calcu00991B, calcu01038B } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00590A(seed) - calcu00171B(seed) + calcu00991B(seed) - calcu01038B(seed));
</script>

<template>
  <div class="blk">comp00353: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(180 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(0 50% 50%);
  display: inline-block;
}
</style>

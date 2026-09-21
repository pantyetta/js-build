<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00473A, calcu01294B, calcu00885B, calcu00376B, calcu01304A } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00473A(seed) - calcu01294B(seed) + calcu00885B(seed) - calcu00376B(seed) + calcu01304A(seed));
</script>

<template>
  <div class="blk">comp01580: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(341 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(161 50% 50%);
  display: inline-block;
}
</style>

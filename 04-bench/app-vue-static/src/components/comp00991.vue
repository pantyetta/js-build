<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00883A, calcu00404B, calcu01291B, calcu00875B } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu00883A(seed) - calcu00404B(seed) + calcu01291B(seed) - calcu00875B(seed));
</script>

<template>
  <div class="blk">comp00991: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(237 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(57 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00088A, calcu01464B, calcu01463B, calcu00304A } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu00088A(seed) - calcu01464B(seed) + calcu01463B(seed) - calcu00304A(seed));
</script>

<template>
  <div class="blk">comp00097: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(247 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(67 50% 50%);
  display: inline-block;
}
</style>

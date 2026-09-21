<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00169A, calcu01233B, calcu00862A, calcu00526B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00169A(seed) - calcu01233B(seed) + calcu00862A(seed) - calcu00526B(seed));
</script>

<template>
  <div class="blk">comp00271: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(199 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(19 50% 50%);
  display: inline-block;
}
</style>

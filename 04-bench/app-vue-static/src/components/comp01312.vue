<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00091B, calcu00040A, calcu00150B, calcu00302B } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00091B(seed) - calcu00040A(seed) + calcu00150B(seed) - calcu00302B(seed));
</script>

<template>
  <div class="blk">comp01312: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(56 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(236 50% 50%);
  display: inline-block;
}
</style>

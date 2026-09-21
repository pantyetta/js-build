<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00029A, calcu00388A, calcu01208A, calcu01178B } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu00029A(seed) - calcu00388A(seed) + calcu01208A(seed) - calcu01178B(seed));
</script>

<template>
  <div class="blk">comp01464: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(146 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(326 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01531A, calcu01322B, calcu00831A, calcu01260B } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu01531A(seed) - calcu01322B(seed) + calcu00831A(seed) - calcu01260B(seed));
</script>

<template>
  <div class="blk">comp01618: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(292 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(112 50% 50%);
  display: inline-block;
}
</style>

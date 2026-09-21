<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00780A, calcu00362B, calcu00298A, calcu00212B, calcu00789B } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu00780A(seed) - calcu00362B(seed) + calcu00298A(seed) - calcu00212B(seed) + calcu00789B(seed));
</script>

<template>
  <div class="blk">comp00573: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(268 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(88 50% 50%);
  display: inline-block;
}
</style>

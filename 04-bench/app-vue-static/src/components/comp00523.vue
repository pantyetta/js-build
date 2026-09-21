<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01384A, calcu00637B, calcu00762A, calcu00733A, calcu00736A } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu01384A(seed) - calcu00637B(seed) + calcu00762A(seed) - calcu00733A(seed) + calcu00736A(seed));
</script>

<template>
  <div class="blk">comp00523: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(242 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(62 50% 50%);
  display: inline-block;
}
</style>

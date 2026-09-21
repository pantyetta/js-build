<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00052A, calcu00872B, calcu00901B, calcu00568B } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu00052A(seed) - calcu00872B(seed) + calcu00901B(seed) - calcu00568B(seed));
</script>

<template>
  <div class="blk">comp01474: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(326 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(146 50% 50%);
  display: inline-block;
}
</style>

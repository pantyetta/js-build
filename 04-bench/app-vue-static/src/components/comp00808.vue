<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01410A, calcu00978A, calcu00020A, calcu00374B } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu01410A(seed) - calcu00978A(seed) + calcu00020A(seed) - calcu00374B(seed));
</script>

<template>
  <div class="blk">comp00808: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(73 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(253 50% 50%);
  display: inline-block;
}
</style>

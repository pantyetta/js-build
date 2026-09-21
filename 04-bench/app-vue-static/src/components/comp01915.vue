<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00452A, calcu00415B, calcu01404B, calcu00698B, calcu00765B } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu00452A(seed) - calcu00415B(seed) + calcu01404B(seed) - calcu00698B(seed) + calcu00765B(seed));
</script>

<template>
  <div class="blk">comp01915: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(189 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(9 50% 50%);
  display: inline-block;
}
</style>

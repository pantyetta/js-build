<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00415B, calcu01355B, calcu00964B, calcu00065A, calcu00652B } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu00415B(seed) - calcu01355B(seed) + calcu00964B(seed) - calcu00065A(seed) + calcu00652B(seed));
</script>

<template>
  <div class="blk">comp01405: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(121 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(301 50% 50%);
  display: inline-block;
}
</style>

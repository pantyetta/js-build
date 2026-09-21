<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00472A, calcu00852A, calcu01442B, calcu00841A } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu00472A(seed) - calcu00852A(seed) + calcu01442B(seed) - calcu00841A(seed));
</script>

<template>
  <div class="blk">comp01931: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(129 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(309 50% 50%);
  display: inline-block;
}
</style>

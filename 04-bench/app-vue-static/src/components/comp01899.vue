<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00845B, calcu00415B, calcu00187A } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu00845B(seed) - calcu00415B(seed) + calcu00187A(seed));
</script>

<template>
  <div class="blk">comp01899: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(224 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(44 50% 50%);
  display: inline-block;
}
</style>

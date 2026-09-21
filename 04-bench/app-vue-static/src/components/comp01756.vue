<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00885B, calcu00225A, calcu01276A, calcu00859A } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00885B(seed) - calcu00225A(seed) + calcu01276A(seed) - calcu00859A(seed));
</script>

<template>
  <div class="blk">comp01756: {{ total }}</div>
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

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01185B, calcu00499A, calcu00513B, calcu00602B, calcu01313A } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu01185B(seed) - calcu00499A(seed) + calcu00513B(seed) - calcu00602B(seed) + calcu01313A(seed));
</script>

<template>
  <div class="blk">comp01259: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(233 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(53 50% 50%);
  display: inline-block;
}
</style>

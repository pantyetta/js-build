<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00246A, calcu01115A, calcu01409A } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu00246A(seed) - calcu01115A(seed) + calcu01409A(seed));
</script>

<template>
  <div class="blk">comp00164: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(49 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(229 50% 50%);
  display: inline-block;
}
</style>

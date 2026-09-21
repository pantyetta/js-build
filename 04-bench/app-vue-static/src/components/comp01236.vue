<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01040A, calcu00442A, calcu00286B, calcu00121A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu01040A(seed) - calcu00442A(seed) + calcu00286B(seed) - calcu00121A(seed));
</script>

<template>
  <div class="blk">comp01236: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(108 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(288 50% 50%);
  display: inline-block;
}
</style>

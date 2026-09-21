<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00774A, calcu00109B, calcu01273A } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu00774A(seed) - calcu00109B(seed) + calcu01273A(seed));
</script>

<template>
  <div class="blk">comp01913: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(118 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(298 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00936A, calcu00551A, calcu01409A } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00936A(seed) - calcu00551A(seed) + calcu01409A(seed));
</script>

<template>
  <div class="blk">comp00813: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(145 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(325 50% 50%);
  display: inline-block;
}
</style>

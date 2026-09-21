<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00442A, calcu01152A, calcu00121B, calcu01558A } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu00442A(seed) - calcu01152A(seed) + calcu00121B(seed) - calcu01558A(seed));
</script>

<template>
  <div class="blk">comp00721: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(292 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(112 50% 50%);
  display: inline-block;
}
</style>

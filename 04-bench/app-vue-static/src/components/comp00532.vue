<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00279A, calcu01467A, calcu01399A } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00279A(seed) - calcu01467A(seed) + calcu01399A(seed));
</script>

<template>
  <div class="blk">comp00532: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(103 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(283 50% 50%);
  display: inline-block;
}
</style>

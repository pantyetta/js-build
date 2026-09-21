<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00605B, calcu00636B, calcu01086A } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00605B(seed) - calcu00636B(seed) + calcu01086A(seed));
</script>

<template>
  <div class="blk">comp01707: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(39 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(219 50% 50%);
  display: inline-block;
}
</style>

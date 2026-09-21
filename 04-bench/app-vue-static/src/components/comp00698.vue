<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00126A, calcu01583A, calcu01161B, calcu00281A } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00126A(seed) - calcu01583A(seed) + calcu01161B(seed) - calcu00281A(seed));
</script>

<template>
  <div class="blk">comp00698: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(300 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(120 50% 50%);
  display: inline-block;
}
</style>

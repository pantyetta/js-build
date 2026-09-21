<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00038A, calcu00036B, calcu00109B, calcu00195A, calcu00743A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu00038A(seed) - calcu00036B(seed) + calcu00109B(seed) - calcu00195A(seed) + calcu00743A(seed));
</script>

<template>
  <div class="blk">comp01572: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(242 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(62 50% 50%);
  display: inline-block;
}
</style>

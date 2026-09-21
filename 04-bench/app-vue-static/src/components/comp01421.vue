<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00114B, calcu01022A, calcu01071A } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu00114B(seed) - calcu01022A(seed) + calcu01071A(seed));
</script>

<template>
  <div class="blk">comp01421: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(54 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(234 50% 50%);
  display: inline-block;
}
</style>

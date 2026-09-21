<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00004A, calcu00677B, calcu01284A, calcu00114B, calcu00854B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00004A(seed) - calcu00677B(seed) + calcu01284A(seed) - calcu00114B(seed) + calcu00854B(seed));
</script>

<template>
  <div class="blk">comp01238: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(239 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(59 50% 50%);
  display: inline-block;
}
</style>

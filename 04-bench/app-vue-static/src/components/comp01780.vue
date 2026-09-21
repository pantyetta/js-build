<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00900B, calcu00858A, calcu00969B, calcu01099A, calcu01439A } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00900B(seed) - calcu00858A(seed) + calcu00969B(seed) - calcu01099A(seed) + calcu01439A(seed));
</script>

<template>
  <div class="blk">comp01780: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(148 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(328 50% 50%);
  display: inline-block;
}
</style>

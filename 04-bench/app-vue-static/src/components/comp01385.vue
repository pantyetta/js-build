<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00980B, calcu01136B, calcu01384A, calcu01481B } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu00980B(seed) - calcu01136B(seed) + calcu01384A(seed) - calcu01481B(seed));
</script>

<template>
  <div class="blk">comp01385: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(51 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(231 50% 50%);
  display: inline-block;
}
</style>

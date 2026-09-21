<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00685A, calcu00501B, calcu01051A, calcu00951B, calcu01572A } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00685A(seed) - calcu00501B(seed) + calcu01051A(seed) - calcu00951B(seed) + calcu01572A(seed));
</script>

<template>
  <div class="blk">comp00832: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(343 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(163 50% 50%);
  display: inline-block;
}
</style>

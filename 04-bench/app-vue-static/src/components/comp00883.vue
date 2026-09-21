<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00341A, calcu01257B, calcu00681B } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu00341A(seed) - calcu01257B(seed) + calcu00681B(seed));
</script>

<template>
  <div class="blk">comp00883: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(320 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(140 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01054A, calcu01334B, calcu01120B, calcu00297A } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu01054A(seed) - calcu01334B(seed) + calcu01120B(seed) - calcu00297A(seed));
</script>

<template>
  <div class="blk">comp00425: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(48 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(228 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00738A, calcu01267A, calcu00211A } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu00738A(seed) - calcu01267A(seed) + calcu00211A(seed));
</script>

<template>
  <div class="blk">comp00566: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(216 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(36 50% 50%);
  display: inline-block;
}
</style>

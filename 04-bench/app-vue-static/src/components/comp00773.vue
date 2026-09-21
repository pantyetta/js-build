<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00839A, calcu01052A, calcu01120A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu00839A(seed) - calcu01052A(seed) + calcu01120A(seed));
</script>

<template>
  <div class="blk">comp00773: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(233 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(53 50% 50%);
  display: inline-block;
}
</style>

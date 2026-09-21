<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00703A, calcu01555A, calcu00418A } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu00703A(seed) - calcu01555A(seed) + calcu00418A(seed));
</script>

<template>
  <div class="blk">comp00033: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(80 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(260 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00871B, calcu01209A, calcu00352A, calcu00519A } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu00871B(seed) - calcu01209A(seed) + calcu00352A(seed) - calcu00519A(seed));
</script>

<template>
  <div class="blk">comp00897: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(74 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(254 50% 50%);
  display: inline-block;
}
</style>

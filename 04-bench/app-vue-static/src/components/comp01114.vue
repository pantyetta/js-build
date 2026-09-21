<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00924A, calcu01555A, calcu00834A, calcu00753A } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu00924A(seed) - calcu01555A(seed) + calcu00834A(seed) - calcu00753A(seed));
</script>

<template>
  <div class="blk">comp01114: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(300 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(120 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00952A, calcu01287A, calcu00209A } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu00952A(seed) - calcu01287A(seed) + calcu00209A(seed));
</script>

<template>
  <div class="blk">comp00190: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(290 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(110 50% 50%);
  display: inline-block;
}
</style>

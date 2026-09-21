<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00295B, calcu00423A, calcu00421A, calcu01176A } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu00295B(seed) - calcu00423A(seed) + calcu00421A(seed) - calcu01176A(seed));
</script>

<template>
  <div class="blk">comp01558: {{ total }}</div>
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

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00807B, calcu00182A, calcu01385A, calcu00544B, calcu00462A } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu00807B(seed) - calcu00182A(seed) + calcu01385A(seed) - calcu00544B(seed) + calcu00462A(seed));
</script>

<template>
  <div class="blk">comp01529: {{ total }}</div>
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

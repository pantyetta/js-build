<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01338B, calcu00717A, calcu01055B, calcu01548B, calcu01036A } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu01338B(seed) - calcu00717A(seed) + calcu01055B(seed) - calcu01548B(seed) + calcu01036A(seed));
</script>

<template>
  <div class="blk">comp01531: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(294 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(114 50% 50%);
  display: inline-block;
}
</style>

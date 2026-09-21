<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00825A, calcu01045B, calcu00271A, calcu01065B, calcu01319A } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu00825A(seed) - calcu01045B(seed) + calcu00271A(seed) - calcu01065B(seed) + calcu01319A(seed));
</script>

<template>
  <div class="blk">comp00073: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(218 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(38 50% 50%);
  display: inline-block;
}
</style>

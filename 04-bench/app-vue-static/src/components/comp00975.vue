<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00352A, calcu01288B, calcu01254B, calcu01387B } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu00352A(seed) - calcu01288B(seed) + calcu01254B(seed) - calcu01387B(seed));
</script>

<template>
  <div class="blk">comp00975: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(254 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(74 50% 50%);
  display: inline-block;
}
</style>

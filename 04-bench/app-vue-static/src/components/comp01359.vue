<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01129A, calcu00153A, calcu00663A, calcu00989A, calcu00034B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu01129A(seed) - calcu00153A(seed) + calcu00663A(seed) - calcu00989A(seed) + calcu00034B(seed));
</script>

<template>
  <div class="blk">comp01359: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(148 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(328 50% 50%);
  display: inline-block;
}
</style>

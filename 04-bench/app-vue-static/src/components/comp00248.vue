<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00437A, calcu01228A, calcu01242B, calcu00525B } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu00437A(seed) - calcu01228A(seed) + calcu01242B(seed) - calcu00525B(seed));
</script>

<template>
  <div class="blk">comp00248: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(69 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(249 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00081B, calcu01497B, calcu00599B, calcu00584A, calcu00195B } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu00081B(seed) - calcu01497B(seed) + calcu00599B(seed) - calcu00584A(seed) + calcu00195B(seed));
</script>

<template>
  <div class="blk">comp00714: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(66 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(246 50% 50%);
  display: inline-block;
}
</style>

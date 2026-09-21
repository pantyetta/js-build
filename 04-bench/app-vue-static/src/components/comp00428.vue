<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00354A, calcu01059A, calcu00878B, calcu00418B } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu00354A(seed) - calcu01059A(seed) + calcu00878B(seed) - calcu00418B(seed));
</script>

<template>
  <div class="blk">comp00428: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(167 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(347 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00198A, calcu01219A, calcu01125B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00198A(seed) - calcu01219A(seed) + calcu01125B(seed));
</script>

<template>
  <div class="blk">comp00044: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(68 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(248 50% 50%);
  display: inline-block;
}
</style>

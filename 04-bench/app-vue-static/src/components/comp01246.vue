<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01021B, calcu00123A, calcu00478B } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu01021B(seed) - calcu00123A(seed) + calcu00478B(seed));
</script>

<template>
  <div class="blk">comp01246: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(166 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(346 50% 50%);
  display: inline-block;
}
</style>

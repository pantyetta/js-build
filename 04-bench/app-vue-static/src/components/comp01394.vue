<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00463B, calcu01385A, calcu00398A, calcu01474B, calcu00940A } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu00463B(seed) - calcu01385A(seed) + calcu00398A(seed) - calcu01474B(seed) + calcu00940A(seed));
</script>

<template>
  <div class="blk">comp01394: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(78 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(258 50% 50%);
  display: inline-block;
}
</style>

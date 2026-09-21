<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00366A, calcu00760B, calcu00925A, calcu00956A, calcu00200B } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu00366A(seed) - calcu00760B(seed) + calcu00925A(seed) - calcu00956A(seed) + calcu00200B(seed));
</script>

<template>
  <div class="blk">comp00450: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(32 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(212 50% 50%);
  display: inline-block;
}
</style>

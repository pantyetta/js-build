<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00487B, calcu00156A, calcu00199A, calcu00031A } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00487B(seed) - calcu00156A(seed) + calcu00199A(seed) - calcu00031A(seed));
</script>

<template>
  <div class="blk">comp01345: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(334 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(154 50% 50%);
  display: inline-block;
}
</style>

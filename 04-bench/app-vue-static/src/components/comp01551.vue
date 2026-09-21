<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00190B, calcu00689B, calcu00429B, calcu00443B, calcu00786A } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu00190B(seed) - calcu00689B(seed) + calcu00429B(seed) - calcu00443B(seed) + calcu00786A(seed));
</script>

<template>
  <div class="blk">comp01551: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(123 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(303 50% 50%);
  display: inline-block;
}
</style>

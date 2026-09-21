<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01570A, calcu00584B, calcu00357B, calcu00628B } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu01570A(seed) - calcu00584B(seed) + calcu00357B(seed) - calcu00628B(seed));
</script>

<template>
  <div class="blk">comp00905: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(284 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(104 50% 50%);
  display: inline-block;
}
</style>

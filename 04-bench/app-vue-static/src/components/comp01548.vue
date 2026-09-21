<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00998B, calcu00327B, calcu00364A, calcu00665A } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu00998B(seed) - calcu00327B(seed) + calcu00364A(seed) - calcu00665A(seed));
</script>

<template>
  <div class="blk">comp01548: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(86 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(266 50% 50%);
  display: inline-block;
}
</style>

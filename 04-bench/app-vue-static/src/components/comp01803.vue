<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00645B, calcu01148A, calcu00761B, calcu01168B } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu00645B(seed) - calcu01148A(seed) + calcu00761B(seed) - calcu01168B(seed));
</script>

<template>
  <div class="blk">comp01803: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(231 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(51 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00863B, calcu01478A, calcu00034B, calcu00230B } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu00863B(seed) - calcu01478A(seed) + calcu00034B(seed) - calcu00230B(seed));
</script>

<template>
  <div class="blk">comp00002: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(293 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(113 50% 50%);
  display: inline-block;
}
</style>

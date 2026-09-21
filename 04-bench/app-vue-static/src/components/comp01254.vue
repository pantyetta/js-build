<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00917A, calcu00329A, calcu01535B, calcu01590A } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu00917A(seed) - calcu00329A(seed) + calcu01535B(seed) - calcu01590A(seed));
</script>

<template>
  <div class="blk">comp01254: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(36 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(216 50% 50%);
  display: inline-block;
}
</style>

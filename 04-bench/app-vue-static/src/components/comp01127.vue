<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00339A, calcu00886B, calcu01246B, calcu01175A, calcu00430B } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu00339A(seed) - calcu00886B(seed) + calcu01246B(seed) - calcu01175A(seed) + calcu00430B(seed));
</script>

<template>
  <div class="blk">comp01127: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(196 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(16 50% 50%);
  display: inline-block;
}
</style>

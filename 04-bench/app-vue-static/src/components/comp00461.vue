<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01130B, calcu00847B, calcu00390B, calcu01557A } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu01130B(seed) - calcu00847B(seed) + calcu00390B(seed) - calcu01557A(seed));
</script>

<template>
  <div class="blk">comp00461: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(209 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(29 50% 50%);
  display: inline-block;
}
</style>

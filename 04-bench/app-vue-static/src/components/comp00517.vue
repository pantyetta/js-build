<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00511B, calcu00121B, calcu01502B, calcu00569B, calcu00049A } from '../lib/index.js';

const seed = 35;
const total = computed(() => calcu00511B(seed) - calcu00121B(seed) + calcu01502B(seed) - calcu00569B(seed) + calcu00049A(seed));
</script>

<template>
  <div class="blk">comp00517: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(181 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(1 50% 50%);
  display: inline-block;
}
</style>

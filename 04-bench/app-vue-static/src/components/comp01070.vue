<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01586A, calcu01216B, calcu01037B, calcu00518B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu01586A(seed) - calcu01216B(seed) + calcu01037B(seed) - calcu00518B(seed));
</script>

<template>
  <div class="blk">comp01070: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(47 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(227 50% 50%);
  display: inline-block;
}
</style>

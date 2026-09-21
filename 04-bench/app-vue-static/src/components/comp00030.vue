<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00337A, calcu00214B, calcu00300A, calcu01362A } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00337A(seed) - calcu00214B(seed) + calcu00300A(seed) - calcu01362A(seed));
</script>

<template>
  <div class="blk">comp00030: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(140 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(320 50% 50%);
  display: inline-block;
}
</style>

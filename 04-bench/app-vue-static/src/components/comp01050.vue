<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01479A, calcu01495B, calcu00318B, calcu00350A } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu01479A(seed) - calcu01495B(seed) + calcu00318B(seed) - calcu00350A(seed));
</script>

<template>
  <div class="blk">comp01050: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(113 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(293 50% 50%);
  display: inline-block;
}
</style>

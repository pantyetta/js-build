<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00265B, calcu00450B, calcu00201B, calcu00878B, calcu00266B } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00265B(seed) - calcu00450B(seed) + calcu00201B(seed) - calcu00878B(seed) + calcu00266B(seed));
</script>

<template>
  <div class="blk">comp01266: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(83 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(263 50% 50%);
  display: inline-block;
}
</style>

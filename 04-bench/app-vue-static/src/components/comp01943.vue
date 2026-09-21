<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00568B, calcu00554A, calcu00801A, calcu00340B } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu00568B(seed) - calcu00554A(seed) + calcu00801A(seed) - calcu00340B(seed));
</script>

<template>
  <div class="blk">comp01943: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(88 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(268 50% 50%);
  display: inline-block;
}
</style>

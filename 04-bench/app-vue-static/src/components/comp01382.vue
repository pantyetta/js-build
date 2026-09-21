<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00868B, calcu00347B, calcu00784A, calcu00194B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00868B(seed) - calcu00347B(seed) + calcu00784A(seed) - calcu00194B(seed));
</script>

<template>
  <div class="blk">comp01382: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(199 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(19 50% 50%);
  display: inline-block;
}
</style>

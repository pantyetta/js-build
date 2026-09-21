<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00020A, calcu00703B, calcu01244A, calcu00631B, calcu00070A } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00020A(seed) - calcu00703B(seed) + calcu01244A(seed) - calcu00631B(seed) + calcu00070A(seed));
</script>

<template>
  <div class="blk">comp01332: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(276 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(96 50% 50%);
  display: inline-block;
}
</style>

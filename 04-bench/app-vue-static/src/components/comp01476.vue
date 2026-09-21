<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01551B, calcu00616A, calcu01414B, calcu00440B } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu01551B(seed) - calcu00616A(seed) + calcu01414B(seed) - calcu00440B(seed));
</script>

<template>
  <div class="blk">comp01476: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(93 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(273 50% 50%);
  display: inline-block;
}
</style>

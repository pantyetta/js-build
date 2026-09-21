<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00393B, calcu01376A, calcu01306A, calcu00529B } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu00393B(seed) - calcu01376A(seed) + calcu01306A(seed) - calcu00529B(seed));
</script>

<template>
  <div class="blk">comp01227: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(203 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(23 50% 50%);
  display: inline-block;
}
</style>

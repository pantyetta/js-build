<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00286A, calcu00093B, calcu00472A, calcu00201A } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00286A(seed) - calcu00093B(seed) + calcu00472A(seed) - calcu00201A(seed));
</script>

<template>
  <div class="blk">comp01520: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(241 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(61 50% 50%);
  display: inline-block;
}
</style>

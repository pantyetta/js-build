<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01116A, calcu00091A, calcu00476B, calcu01398A, calcu00950A } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu01116A(seed) - calcu00091A(seed) + calcu00476B(seed) - calcu01398A(seed) + calcu00950A(seed));
</script>

<template>
  <div class="blk">comp00731: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(62 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(242 50% 50%);
  display: inline-block;
}
</style>

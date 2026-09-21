<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01102B, calcu00287B, calcu00651B, calcu00396A } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu01102B(seed) - calcu00287B(seed) + calcu00651B(seed) - calcu00396A(seed));
</script>

<template>
  <div class="blk">comp01042: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(250 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(70 50% 50%);
  display: inline-block;
}
</style>

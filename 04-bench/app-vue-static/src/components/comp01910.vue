<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01316B, calcu01061B, calcu00604A } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu01316B(seed) - calcu01061B(seed) + calcu00604A(seed));
</script>

<template>
  <div class="blk">comp01910: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(150 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(330 50% 50%);
  display: inline-block;
}
</style>

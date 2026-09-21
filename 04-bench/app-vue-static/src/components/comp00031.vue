<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00899A, calcu01202A, calcu01006A, calcu00563A, calcu01357A } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu00899A(seed) - calcu01202A(seed) + calcu01006A(seed) - calcu00563A(seed) + calcu01357A(seed));
</script>

<template>
  <div class="blk">comp00031: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(112 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(292 50% 50%);
  display: inline-block;
}
</style>

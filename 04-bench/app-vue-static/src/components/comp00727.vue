<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00265B, calcu01458B, calcu00771B, calcu00339A, calcu01109B } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu00265B(seed) - calcu01458B(seed) + calcu00771B(seed) - calcu00339A(seed) + calcu01109B(seed));
</script>

<template>
  <div class="blk">comp00727: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(186 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(6 50% 50%);
  display: inline-block;
}
</style>

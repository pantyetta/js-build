<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01547A, calcu00890B, calcu00357A } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu01547A(seed) - calcu00890B(seed) + calcu00357A(seed));
</script>

<template>
  <div class="blk">comp00875: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(174 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(354 50% 50%);
  display: inline-block;
}
</style>

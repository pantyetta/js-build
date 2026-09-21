<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01003A, calcu01296B, calcu00986A } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu01003A(seed) - calcu01296B(seed) + calcu00986A(seed));
</script>

<template>
  <div class="blk">comp01197: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(30 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(210 50% 50%);
  display: inline-block;
}
</style>

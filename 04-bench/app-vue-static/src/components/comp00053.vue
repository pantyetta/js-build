<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01084A, calcu01381A, calcu00865A } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu01084A(seed) - calcu01381A(seed) + calcu00865A(seed));
</script>

<template>
  <div class="blk">comp00053: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(264 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(84 50% 50%);
  display: inline-block;
}
</style>

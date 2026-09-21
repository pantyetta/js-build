<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01429A, calcu00360A, calcu01293A } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu01429A(seed) - calcu00360A(seed) + calcu01293A(seed));
</script>

<template>
  <div class="blk">comp00034: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(3 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(183 50% 50%);
  display: inline-block;
}
</style>

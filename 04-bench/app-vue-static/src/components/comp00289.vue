<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01570A, calcu00920A, calcu01508A } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu01570A(seed) - calcu00920A(seed) + calcu01508A(seed));
</script>

<template>
  <div class="blk">comp00289: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(146 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(326 50% 50%);
  display: inline-block;
}
</style>

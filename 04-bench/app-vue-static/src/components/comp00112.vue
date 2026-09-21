<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00104B, calcu00977A, calcu01161B, calcu00013A } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu00104B(seed) - calcu00977A(seed) + calcu01161B(seed) - calcu00013A(seed));
</script>

<template>
  <div class="blk">comp00112: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(353 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(173 50% 50%);
  display: inline-block;
}
</style>

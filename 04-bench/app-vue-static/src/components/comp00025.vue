<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00843A, calcu01380A, calcu01179B, calcu00260A } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu00843A(seed) - calcu01380A(seed) + calcu01179B(seed) - calcu00260A(seed));
</script>

<template>
  <div class="blk">comp00025: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(197 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(17 50% 50%);
  display: inline-block;
}
</style>

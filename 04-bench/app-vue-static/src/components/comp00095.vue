<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01495B, calcu01138B, calcu00175A, calcu01153A, calcu00670A } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu01495B(seed) - calcu01138B(seed) + calcu00175A(seed) - calcu01153A(seed) + calcu00670A(seed));
</script>

<template>
  <div class="blk">comp00095: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(54 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(234 50% 50%);
  display: inline-block;
}
</style>

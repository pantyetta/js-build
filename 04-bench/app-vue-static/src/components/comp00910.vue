<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00652A, calcu00535A, calcu01555A, calcu00711B, calcu00238A } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00652A(seed) - calcu00535A(seed) + calcu01555A(seed) - calcu00711B(seed) + calcu00238A(seed));
</script>

<template>
  <div class="blk">comp00910: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(244 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(64 50% 50%);
  display: inline-block;
}
</style>

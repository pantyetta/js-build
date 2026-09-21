<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00415B, calcu00622B, calcu00969A, calcu00634B, calcu00629A } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00415B(seed) - calcu00622B(seed) + calcu00969A(seed) - calcu00634B(seed) + calcu00629A(seed));
</script>

<template>
  <div class="blk">comp00688: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(45 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(225 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00792B, calcu01159A, calcu01276B } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu00792B(seed) - calcu01159A(seed) + calcu01276B(seed));
</script>

<template>
  <div class="blk">comp01965: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(218 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(38 50% 50%);
  display: inline-block;
}
</style>

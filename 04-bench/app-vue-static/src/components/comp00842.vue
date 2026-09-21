<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01375A, calcu00539B, calcu00553A, calcu01059B, calcu00216A } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu01375A(seed) - calcu00539B(seed) + calcu00553A(seed) - calcu01059B(seed) + calcu00216A(seed));
</script>

<template>
  <div class="blk">comp00842: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(283 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(103 50% 50%);
  display: inline-block;
}
</style>

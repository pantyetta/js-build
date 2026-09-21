<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00967B, calcu01223B, calcu00666A, calcu00848B, calcu00385A } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu00967B(seed) - calcu01223B(seed) + calcu00666A(seed) - calcu00848B(seed) + calcu00385A(seed));
</script>

<template>
  <div class="blk">comp01351: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(118 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(298 50% 50%);
  display: inline-block;
}
</style>

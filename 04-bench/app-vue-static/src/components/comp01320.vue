<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00783B, calcu00297A, calcu00514A, calcu01223B, calcu01364A } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00783B(seed) - calcu00297A(seed) + calcu00514A(seed) - calcu01223B(seed) + calcu01364A(seed));
</script>

<template>
  <div class="blk">comp01320: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(173 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(353 50% 50%);
  display: inline-block;
}
</style>

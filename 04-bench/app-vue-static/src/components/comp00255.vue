<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00209B, calcu01223A, calcu00093B, calcu00397A, calcu01316A } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu00209B(seed) - calcu01223A(seed) + calcu00093B(seed) - calcu00397A(seed) + calcu01316A(seed));
</script>

<template>
  <div class="blk">comp00255: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(148 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(328 50% 50%);
  display: inline-block;
}
</style>

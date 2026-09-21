<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00217A, calcu01501B, calcu00502A } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00217A(seed) - calcu01501B(seed) + calcu00502A(seed));
</script>

<template>
  <div class="blk">comp00474: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(115 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(295 50% 50%);
  display: inline-block;
}
</style>

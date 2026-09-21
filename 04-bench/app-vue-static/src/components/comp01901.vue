<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00857B, calcu00666A, calcu00686B, calcu00348A } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu00857B(seed) - calcu00666A(seed) + calcu00686B(seed) - calcu00348A(seed));
</script>

<template>
  <div class="blk">comp01901: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(88 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(268 50% 50%);
  display: inline-block;
}
</style>

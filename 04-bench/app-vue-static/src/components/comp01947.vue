<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00456B, calcu01353B, calcu01246B, calcu00022A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00456B(seed) - calcu01353B(seed) + calcu01246B(seed) - calcu00022A(seed));
</script>

<template>
  <div class="blk">comp01947: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(351 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(171 50% 50%);
  display: inline-block;
}
</style>

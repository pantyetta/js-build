<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00944B, calcu00502B, calcu01588A, calcu00763A, calcu01535A } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu00944B(seed) - calcu00502B(seed) + calcu01588A(seed) - calcu00763A(seed) + calcu01535A(seed));
</script>

<template>
  <div class="blk">comp01848: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(257 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(77 50% 50%);
  display: inline-block;
}
</style>

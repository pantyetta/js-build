<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00850B, calcu00423B, calcu00382A, calcu00024A } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu00850B(seed) - calcu00423B(seed) + calcu00382A(seed) - calcu00024A(seed));
</script>

<template>
  <div class="blk">comp01878: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(151 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(331 50% 50%);
  display: inline-block;
}
</style>

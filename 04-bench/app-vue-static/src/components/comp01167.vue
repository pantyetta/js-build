<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00502B, calcu00637A, calcu00118B, calcu00530B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00502B(seed) - calcu00637A(seed) + calcu00118B(seed) - calcu00530B(seed));
</script>

<template>
  <div class="blk">comp01167: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(116 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(296 50% 50%);
  display: inline-block;
}
</style>

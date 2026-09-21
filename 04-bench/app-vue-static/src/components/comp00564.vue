<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00318A, calcu00251B, calcu00954B, calcu00616B } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu00318A(seed) - calcu00251B(seed) + calcu00954B(seed) - calcu00616B(seed));
</script>

<template>
  <div class="blk">comp00564: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(234 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(54 50% 50%);
  display: inline-block;
}
</style>

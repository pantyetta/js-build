<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00504B, calcu00470B, calcu00142A, calcu00780A } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00504B(seed) - calcu00470B(seed) + calcu00142A(seed) - calcu00780A(seed));
</script>

<template>
  <div class="blk">comp00264: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(221 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(41 50% 50%);
  display: inline-block;
}
</style>

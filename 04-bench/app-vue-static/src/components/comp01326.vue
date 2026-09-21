<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01156A, calcu00142A, calcu00657B, calcu01500A, calcu00813A } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu01156A(seed) - calcu00142A(seed) + calcu00657B(seed) - calcu01500A(seed) + calcu00813A(seed));
</script>

<template>
  <div class="blk">comp01326: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(66 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(246 50% 50%);
  display: inline-block;
}
</style>

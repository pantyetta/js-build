<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00717A, calcu00598A, calcu01223B, calcu00137B } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00717A(seed) - calcu00598A(seed) + calcu01223B(seed) - calcu00137B(seed));
</script>

<template>
  <div class="blk">comp00495: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(155 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(335 50% 50%);
  display: inline-block;
}
</style>

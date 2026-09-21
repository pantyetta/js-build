<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00604A, calcu00926A, calcu00186A } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu00604A(seed) - calcu00926A(seed) + calcu00186A(seed));
</script>

<template>
  <div class="blk">comp00933: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(32 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(212 50% 50%);
  display: inline-block;
}
</style>

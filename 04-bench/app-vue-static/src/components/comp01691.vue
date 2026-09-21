<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00590B, calcu00653A, calcu00688B, calcu00364B } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu00590B(seed) - calcu00653A(seed) + calcu00688B(seed) - calcu00364B(seed));
</script>

<template>
  <div class="blk">comp01691: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(26 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(206 50% 50%);
  display: inline-block;
}
</style>

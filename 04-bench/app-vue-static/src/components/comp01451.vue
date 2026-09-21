<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00066A, calcu01009A, calcu01092B } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00066A(seed) - calcu01009A(seed) + calcu01092B(seed));
</script>

<template>
  <div class="blk">comp01451: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(215 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(35 50% 50%);
  display: inline-block;
}
</style>

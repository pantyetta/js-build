<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00933A, calcu00728B, calcu00177A, calcu00128B, calcu00431A } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu00933A(seed) - calcu00728B(seed) + calcu00177A(seed) - calcu00128B(seed) + calcu00431A(seed));
</script>

<template>
  <div class="blk">comp01764: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(277 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(97 50% 50%);
  display: inline-block;
}
</style>

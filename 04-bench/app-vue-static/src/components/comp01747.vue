<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00114B, calcu00975A, calcu01345B, calcu00682A } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00114B(seed) - calcu00975A(seed) + calcu01345B(seed) - calcu00682A(seed));
</script>

<template>
  <div class="blk">comp01747: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(146 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(326 50% 50%);
  display: inline-block;
}
</style>

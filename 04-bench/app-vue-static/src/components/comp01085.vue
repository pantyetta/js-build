<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01388B, calcu01278B, calcu00459B, calcu00484A, calcu00574A } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu01388B(seed) - calcu01278B(seed) + calcu00459B(seed) - calcu00484A(seed) + calcu00574A(seed));
</script>

<template>
  <div class="blk">comp01085: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(18 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(198 50% 50%);
  display: inline-block;
}
</style>

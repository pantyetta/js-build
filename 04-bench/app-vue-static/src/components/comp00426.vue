<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00940B, calcu00484A, calcu00633A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00940B(seed) - calcu00484A(seed) + calcu00633A(seed));
</script>

<template>
  <div class="blk">comp00426: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(231 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(51 50% 50%);
  display: inline-block;
}
</style>

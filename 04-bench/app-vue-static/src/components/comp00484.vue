<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00574B, calcu00232B, calcu01385A, calcu00769A } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00574B(seed) - calcu00232B(seed) + calcu01385A(seed) - calcu00769A(seed));
</script>

<template>
  <div class="blk">comp00484: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(141 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(321 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00940A, calcu00236A, calcu00944B } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00940A(seed) - calcu00236A(seed) + calcu00944B(seed));
</script>

<template>
  <div class="blk">comp00275: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(260 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(80 50% 50%);
  display: inline-block;
}
</style>

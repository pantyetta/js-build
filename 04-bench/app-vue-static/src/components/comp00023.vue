<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01060B, calcu00481A, calcu00275A } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu01060B(seed) - calcu00481A(seed) + calcu00275A(seed));
</script>

<template>
  <div class="blk">comp00023: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(242 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(62 50% 50%);
  display: inline-block;
}
</style>

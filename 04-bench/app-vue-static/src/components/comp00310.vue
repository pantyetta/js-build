<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00206A, calcu01511B, calcu01427A } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu00206A(seed) - calcu01511B(seed) + calcu01427A(seed));
</script>

<template>
  <div class="blk">comp00310: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(92 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(272 50% 50%);
  display: inline-block;
}
</style>

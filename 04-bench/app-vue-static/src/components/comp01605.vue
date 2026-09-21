<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00305B, calcu01320B, calcu00352B, calcu00079A } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu00305B(seed) - calcu01320B(seed) + calcu00352B(seed) - calcu00079A(seed));
</script>

<template>
  <div class="blk">comp01605: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(111 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(291 50% 50%);
  display: inline-block;
}
</style>

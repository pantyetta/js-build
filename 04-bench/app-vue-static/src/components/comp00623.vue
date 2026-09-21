<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01059A, calcu00484B, calcu00907B, calcu00791B } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu01059A(seed) - calcu00484B(seed) + calcu00907B(seed) - calcu00791B(seed));
</script>

<template>
  <div class="blk">comp00623: {{ total }}</div>
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

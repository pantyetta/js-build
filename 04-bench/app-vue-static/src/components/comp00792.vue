<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00295B, calcu01324A, calcu00094B } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00295B(seed) - calcu01324A(seed) + calcu00094B(seed));
</script>

<template>
  <div class="blk">comp00792: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(265 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(85 50% 50%);
  display: inline-block;
}
</style>

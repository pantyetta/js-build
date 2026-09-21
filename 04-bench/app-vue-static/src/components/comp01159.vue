<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01590A, calcu00906A, calcu00671B, calcu01433B, calcu00997A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu01590A(seed) - calcu00906A(seed) + calcu00671B(seed) - calcu01433B(seed) + calcu00997A(seed));
</script>

<template>
  <div class="blk">comp01159: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(160 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(340 50% 50%);
  display: inline-block;
}
</style>

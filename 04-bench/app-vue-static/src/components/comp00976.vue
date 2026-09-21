<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00979B, calcu01594A, calcu00230A, calcu00175B } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu00979B(seed) - calcu01594A(seed) + calcu00230A(seed) - calcu00175B(seed));
</script>

<template>
  <div class="blk">comp00976: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(0 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(180 50% 50%);
  display: inline-block;
}
</style>

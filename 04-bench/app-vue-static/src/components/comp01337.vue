<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00818B, calcu00001A, calcu00320B, calcu00468B } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu00818B(seed) - calcu00001A(seed) + calcu00320B(seed) - calcu00468B(seed));
</script>

<template>
  <div class="blk">comp01337: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(124 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(304 50% 50%);
  display: inline-block;
}
</style>

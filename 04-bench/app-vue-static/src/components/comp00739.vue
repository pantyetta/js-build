<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00362B, calcu00686A, calcu00329A } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu00362B(seed) - calcu00686A(seed) + calcu00329A(seed));
</script>

<template>
  <div class="blk">comp00739: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(25 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(205 50% 50%);
  display: inline-block;
}
</style>

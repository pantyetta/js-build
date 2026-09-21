<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00531B, calcu00374A, calcu00407A, calcu00575B } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu00531B(seed) - calcu00374A(seed) + calcu00407A(seed) - calcu00575B(seed));
</script>

<template>
  <div class="blk">comp01661: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(113 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(293 50% 50%);
  display: inline-block;
}
</style>

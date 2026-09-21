<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00655A, calcu01282B, calcu00317B, calcu00569B, calcu01039B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00655A(seed) - calcu01282B(seed) + calcu00317B(seed) - calcu00569B(seed) + calcu01039B(seed));
</script>

<template>
  <div class="blk">comp00214: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(32 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(212 50% 50%);
  display: inline-block;
}
</style>

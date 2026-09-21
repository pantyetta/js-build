<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00975A, calcu00147A, calcu01270B, calcu00757A, calcu01531A } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu00975A(seed) - calcu00147A(seed) + calcu01270B(seed) - calcu00757A(seed) + calcu01531A(seed));
</script>

<template>
  <div class="blk">comp00480: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(199 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(19 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00894B, calcu00286B, calcu00393A, calcu01408B } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00894B(seed) - calcu00286B(seed) + calcu00393A(seed) - calcu01408B(seed));
</script>

<template>
  <div class="blk">comp00775: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(178 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(358 50% 50%);
  display: inline-block;
}
</style>

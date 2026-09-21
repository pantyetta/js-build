<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00731A, calcu01261A, calcu01094A, calcu00114A } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu00731A(seed) - calcu01261A(seed) + calcu01094A(seed) - calcu00114A(seed));
</script>

<template>
  <div class="blk">comp00410: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(315 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(135 50% 50%);
  display: inline-block;
}
</style>

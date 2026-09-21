<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01535A, calcu00224A, calcu00656A, calcu00833B } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu01535A(seed) - calcu00224A(seed) + calcu00656A(seed) - calcu00833B(seed));
</script>

<template>
  <div class="blk">comp01262: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(322 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(142 50% 50%);
  display: inline-block;
}
</style>

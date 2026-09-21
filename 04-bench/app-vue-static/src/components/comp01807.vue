<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01423B, calcu01226A, calcu00078B, calcu00789B } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu01423B(seed) - calcu01226A(seed) + calcu00078B(seed) - calcu00789B(seed));
</script>

<template>
  <div class="blk">comp01807: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(145 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(325 50% 50%);
  display: inline-block;
}
</style>

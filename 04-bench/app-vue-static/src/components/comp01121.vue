<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01261A, calcu00126B, calcu01051B, calcu01104B } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu01261A(seed) - calcu00126B(seed) + calcu01051B(seed) - calcu01104B(seed));
</script>

<template>
  <div class="blk">comp01121: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(339 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(159 50% 50%);
  display: inline-block;
}
</style>

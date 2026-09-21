<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00237A, calcu01146A, calcu01563B, calcu00627B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu00237A(seed) - calcu01146A(seed) + calcu01563B(seed) - calcu00627B(seed));
</script>

<template>
  <div class="blk">comp00382: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(7 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(187 50% 50%);
  display: inline-block;
}
</style>

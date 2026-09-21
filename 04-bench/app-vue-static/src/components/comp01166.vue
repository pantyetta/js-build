<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01029A, calcu00242A, calcu00990B, calcu01554B } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu01029A(seed) - calcu00242A(seed) + calcu00990B(seed) - calcu01554B(seed));
</script>

<template>
  <div class="blk">comp01166: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(186 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(6 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00380B, calcu00417A, calcu00621B, calcu01029A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00380B(seed) - calcu00417A(seed) + calcu00621B(seed) - calcu01029A(seed));
</script>

<template>
  <div class="blk">comp01034: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(267 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(87 50% 50%);
  display: inline-block;
}
</style>

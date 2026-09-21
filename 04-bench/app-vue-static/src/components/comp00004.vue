<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00755A, calcu01310B, calcu00901A, calcu00511A } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00755A(seed) - calcu01310B(seed) + calcu00901A(seed) - calcu00511A(seed));
</script>

<template>
  <div class="blk">comp00004: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(17 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(197 50% 50%);
  display: inline-block;
}
</style>

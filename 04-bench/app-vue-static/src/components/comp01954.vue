<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00345A, calcu00900A, calcu00070A, calcu01118B, calcu00582B } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu00345A(seed) - calcu00900A(seed) + calcu00070A(seed) - calcu01118B(seed) + calcu00582B(seed));
</script>

<template>
  <div class="blk">comp01954: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(77 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(257 50% 50%);
  display: inline-block;
}
</style>

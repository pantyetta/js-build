<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01502B, calcu00162A, calcu00776A, calcu01463B, calcu00886B } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu01502B(seed) - calcu00162A(seed) + calcu00776A(seed) - calcu01463B(seed) + calcu00886B(seed));
</script>

<template>
  <div class="blk">comp01583: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(122 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(302 50% 50%);
  display: inline-block;
}
</style>

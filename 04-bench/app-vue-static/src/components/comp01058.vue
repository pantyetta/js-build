<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00863A, calcu01365A, calcu00496B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00863A(seed) - calcu01365A(seed) + calcu00496B(seed));
</script>

<template>
  <div class="blk">comp01058: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(248 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(68 50% 50%);
  display: inline-block;
}
</style>

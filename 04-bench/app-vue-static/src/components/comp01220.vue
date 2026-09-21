<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01231A, calcu00680B, calcu01147A } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu01231A(seed) - calcu00680B(seed) + calcu01147A(seed));
</script>

<template>
  <div class="blk">comp01220: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(309 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(129 50% 50%);
  display: inline-block;
}
</style>

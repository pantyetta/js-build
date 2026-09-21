<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01426A, calcu00487A, calcu00334B } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu01426A(seed) - calcu00487A(seed) + calcu00334B(seed));
</script>

<template>
  <div class="blk">comp00640: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(178 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(358 50% 50%);
  display: inline-block;
}
</style>

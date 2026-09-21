<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00119A, calcu00949B, calcu01147A, calcu01327B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00119A(seed) - calcu00949B(seed) + calcu01147A(seed) - calcu01327B(seed));
</script>

<template>
  <div class="blk">comp01447: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(193 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(13 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01213A, calcu01577B, calcu01534B, calcu01270A, calcu00979B } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu01213A(seed) - calcu01577B(seed) + calcu01534B(seed) - calcu01270A(seed) + calcu00979B(seed));
</script>

<template>
  <div class="blk">comp01978: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(23 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(203 50% 50%);
  display: inline-block;
}
</style>

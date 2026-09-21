<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00655A, calcu01535A, calcu01062B, calcu00870B, calcu01147B } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00655A(seed) - calcu01535A(seed) + calcu01062B(seed) - calcu00870B(seed) + calcu01147B(seed));
</script>

<template>
  <div class="blk">comp01629: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(310 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(130 50% 50%);
  display: inline-block;
}
</style>

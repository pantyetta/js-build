<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00348A, calcu00531A, calcu01199A, calcu00438A, calcu01184B } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu00348A(seed) - calcu00531A(seed) + calcu01199A(seed) - calcu00438A(seed) + calcu01184B(seed));
</script>

<template>
  <div class="blk">comp01095: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(205 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(25 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01300B, calcu00041B, calcu00791A, calcu00535B } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu01300B(seed) - calcu00041B(seed) + calcu00791A(seed) - calcu00535B(seed));
</script>

<template>
  <div class="blk">comp00246: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(11 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(191 50% 50%);
  display: inline-block;
}
</style>

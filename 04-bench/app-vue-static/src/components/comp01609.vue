<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00853A, calcu01403B, calcu00136A, calcu00300B } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu00853A(seed) - calcu01403B(seed) + calcu00136A(seed) - calcu00300B(seed));
</script>

<template>
  <div class="blk">comp01609: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(314 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(134 50% 50%);
  display: inline-block;
}
</style>

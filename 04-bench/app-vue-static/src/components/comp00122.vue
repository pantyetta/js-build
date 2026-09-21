<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00769A, calcu01066B, calcu00634A, calcu00804B } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu00769A(seed) - calcu01066B(seed) + calcu00634A(seed) - calcu00804B(seed));
</script>

<template>
  <div class="blk">comp00122: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(212 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(32 50% 50%);
  display: inline-block;
}
</style>

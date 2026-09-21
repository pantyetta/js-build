<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00259B, calcu01523A, calcu00944A, calcu01317B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00259B(seed) - calcu01523A(seed) + calcu00944A(seed) - calcu01317B(seed));
</script>

<template>
  <div class="blk">comp00177: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(237 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(57 50% 50%);
  display: inline-block;
}
</style>

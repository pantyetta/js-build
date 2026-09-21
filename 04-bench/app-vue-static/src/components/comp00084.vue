<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01564B, calcu01591A, calcu01277A, calcu01479B, calcu00519B } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu01564B(seed) - calcu01591A(seed) + calcu01277A(seed) - calcu01479B(seed) + calcu00519B(seed));
</script>

<template>
  <div class="blk">comp00084: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(354 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(174 50% 50%);
  display: inline-block;
}
</style>

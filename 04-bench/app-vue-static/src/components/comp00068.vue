<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00406B, calcu01423A, calcu00627A, calcu00831A, calcu01465B } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00406B(seed) - calcu01423A(seed) + calcu00627A(seed) - calcu00831A(seed) + calcu01465B(seed));
</script>

<template>
  <div class="blk">comp00068: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(320 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(140 50% 50%);
  display: inline-block;
}
</style>

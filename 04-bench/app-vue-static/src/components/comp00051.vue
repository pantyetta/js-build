<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00444A, calcu00317A, calcu00911A, calcu01129B } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu00444A(seed) - calcu00317A(seed) + calcu00911A(seed) - calcu01129B(seed));
</script>

<template>
  <div class="blk">comp00051: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(48 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(228 50% 50%);
  display: inline-block;
}
</style>

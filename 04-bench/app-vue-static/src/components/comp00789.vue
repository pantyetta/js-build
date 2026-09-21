<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00199A, calcu00047B, calcu01398B, calcu01208B } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu00199A(seed) - calcu00047B(seed) + calcu01398B(seed) - calcu01208B(seed));
</script>

<template>
  <div class="blk">comp00789: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(118 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(298 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00975B, calcu00148B, calcu01025B, calcu01131B, calcu00956B } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu00975B(seed) - calcu00148B(seed) + calcu01025B(seed) - calcu01131B(seed) + calcu00956B(seed));
</script>

<template>
  <div class="blk">comp01795: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(256 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(76 50% 50%);
  display: inline-block;
}
</style>

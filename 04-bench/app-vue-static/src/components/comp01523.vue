<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00435B, calcu00327B, calcu01472A } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00435B(seed) - calcu00327B(seed) + calcu01472A(seed));
</script>

<template>
  <div class="blk">comp01523: {{ total }}</div>
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

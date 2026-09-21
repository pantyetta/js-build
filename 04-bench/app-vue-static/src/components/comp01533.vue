<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01007A, calcu00468B, calcu00788B, calcu01348A } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu01007A(seed) - calcu00468B(seed) + calcu00788B(seed) - calcu01348A(seed));
</script>

<template>
  <div class="blk">comp01533: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(5 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(185 50% 50%);
  display: inline-block;
}
</style>

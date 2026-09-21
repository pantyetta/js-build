<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00624B, calcu01319A, calcu00345A, calcu01324A, calcu00285A } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu00624B(seed) - calcu01319A(seed) + calcu00345A(seed) - calcu01324A(seed) + calcu00285A(seed));
</script>

<template>
  <div class="blk">comp00144: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(235 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(55 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00086A, calcu01510A, calcu00924B, calcu00709A, calcu01288B } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu00086A(seed) - calcu01510A(seed) + calcu00924B(seed) - calcu00709A(seed) + calcu01288B(seed));
</script>

<template>
  <div class="blk">comp00059: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(338 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(158 50% 50%);
  display: inline-block;
}
</style>

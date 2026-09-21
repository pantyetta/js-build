<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01461B, calcu00832B, calcu01110A, calcu00066A, calcu01435B } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu01461B(seed) - calcu00832B(seed) + calcu01110A(seed) - calcu00066A(seed) + calcu01435B(seed));
</script>

<template>
  <div class="blk">comp01302: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(150 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(330 50% 50%);
  display: inline-block;
}
</style>

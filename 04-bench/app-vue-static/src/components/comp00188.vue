<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00863A, calcu00466B, calcu00099A, calcu00608A, calcu00506A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00863A(seed) - calcu00466B(seed) + calcu00099A(seed) - calcu00608A(seed) + calcu00506A(seed));
</script>

<template>
  <div class="blk">comp00188: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(291 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(111 50% 50%);
  display: inline-block;
}
</style>

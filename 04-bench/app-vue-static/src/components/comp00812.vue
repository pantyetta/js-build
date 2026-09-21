<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00753B, calcu01187B, calcu00704A } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu00753B(seed) - calcu01187B(seed) + calcu00704A(seed));
</script>

<template>
  <div class="blk">comp00812: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(246 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(66 50% 50%);
  display: inline-block;
}
</style>

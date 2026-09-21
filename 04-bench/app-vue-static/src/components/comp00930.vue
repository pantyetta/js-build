<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00857A, calcu00063A, calcu00866A, calcu00274B, calcu01354A } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu00857A(seed) - calcu00063A(seed) + calcu00866A(seed) - calcu00274B(seed) + calcu01354A(seed));
</script>

<template>
  <div class="blk">comp00930: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(122 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(302 50% 50%);
  display: inline-block;
}
</style>

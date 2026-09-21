<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00704B, calcu01059A, calcu00930A } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu00704B(seed) - calcu01059A(seed) + calcu00930A(seed));
</script>

<template>
  <div class="blk">comp00801: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(17 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(197 50% 50%);
  display: inline-block;
}
</style>

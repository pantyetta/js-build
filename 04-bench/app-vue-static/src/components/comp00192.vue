<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00110A, calcu01307A, calcu00905B, calcu00970B, calcu00471A } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu00110A(seed) - calcu01307A(seed) + calcu00905B(seed) - calcu00970B(seed) + calcu00471A(seed));
</script>

<template>
  <div class="blk">comp00192: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(76 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(256 50% 50%);
  display: inline-block;
}
</style>

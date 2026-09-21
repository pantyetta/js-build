<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00475B, calcu00084A, calcu00477B, calcu00984A, calcu00324A } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu00475B(seed) - calcu00084A(seed) + calcu00477B(seed) - calcu00984A(seed) + calcu00324A(seed));
</script>

<template>
  <div class="blk">comp00678: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(253 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(73 50% 50%);
  display: inline-block;
}
</style>

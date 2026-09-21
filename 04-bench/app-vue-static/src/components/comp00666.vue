<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00347B, calcu00468A, calcu00561A, calcu01578B, calcu00355A } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu00347B(seed) - calcu00468A(seed) + calcu00561A(seed) - calcu01578B(seed) + calcu00355A(seed));
</script>

<template>
  <div class="blk">comp00666: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(208 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(28 50% 50%);
  display: inline-block;
}
</style>

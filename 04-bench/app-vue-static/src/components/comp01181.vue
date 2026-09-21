<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00099B, calcu01221A, calcu00533B } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu00099B(seed) - calcu01221A(seed) + calcu00533B(seed));
</script>

<template>
  <div class="blk">comp01181: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(143 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(323 50% 50%);
  display: inline-block;
}
</style>

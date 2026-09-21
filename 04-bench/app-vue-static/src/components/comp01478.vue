<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01296A, calcu01453A, calcu00510B, calcu01304A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu01296A(seed) - calcu01453A(seed) + calcu00510B(seed) - calcu01304A(seed));
</script>

<template>
  <div class="blk">comp01478: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(49 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(229 50% 50%);
  display: inline-block;
}
</style>

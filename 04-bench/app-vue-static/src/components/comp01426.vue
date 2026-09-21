<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00332B, calcu00424B, calcu00193A, calcu00414A, calcu00323A } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu00332B(seed) - calcu00424B(seed) + calcu00193A(seed) - calcu00414A(seed) + calcu00323A(seed));
</script>

<template>
  <div class="blk">comp01426: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(309 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(129 50% 50%);
  display: inline-block;
}
</style>

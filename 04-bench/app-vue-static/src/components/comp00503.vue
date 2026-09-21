<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01347A, calcu01051A, calcu00623A, calcu01515A, calcu00970A } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu01347A(seed) - calcu01051A(seed) + calcu00623A(seed) - calcu01515A(seed) + calcu00970A(seed));
</script>

<template>
  <div class="blk">comp00503: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(194 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(14 50% 50%);
  display: inline-block;
}
</style>

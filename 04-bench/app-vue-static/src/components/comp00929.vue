<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01223A, calcu01015B, calcu00648A } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu01223A(seed) - calcu01015B(seed) + calcu00648A(seed));
</script>

<template>
  <div class="blk">comp00929: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(54 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(234 50% 50%);
  display: inline-block;
}
</style>

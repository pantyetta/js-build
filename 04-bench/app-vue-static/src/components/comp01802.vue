<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00054A, calcu01593A, calcu01174A } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu00054A(seed) - calcu01593A(seed) + calcu01174A(seed));
</script>

<template>
  <div class="blk">comp01802: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(70 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(250 50% 50%);
  display: inline-block;
}
</style>

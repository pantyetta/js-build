<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01476B, calcu01177A, calcu00756A, calcu00973B, calcu00553B } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu01476B(seed) - calcu01177A(seed) + calcu00756A(seed) - calcu00973B(seed) + calcu00553B(seed));
</script>

<template>
  <div class="blk">comp00700: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(214 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(34 50% 50%);
  display: inline-block;
}
</style>

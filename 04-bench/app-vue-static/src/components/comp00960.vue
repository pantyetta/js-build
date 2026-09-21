<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00238A, calcu00806A, calcu00044B, calcu01506A, calcu01497A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00238A(seed) - calcu00806A(seed) + calcu00044B(seed) - calcu01506A(seed) + calcu01497A(seed));
</script>

<template>
  <div class="blk">comp00960: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(219 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(39 50% 50%);
  display: inline-block;
}
</style>

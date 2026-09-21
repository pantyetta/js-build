<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01544A, calcu01044B, calcu00481B, calcu01264A, calcu01556B } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu01544A(seed) - calcu01044B(seed) + calcu00481B(seed) - calcu01264A(seed) + calcu01556B(seed));
</script>

<template>
  <div class="blk">comp00321: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(310 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(130 50% 50%);
  display: inline-block;
}
</style>

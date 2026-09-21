<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00780A, calcu01082A, calcu00822A, calcu01198A } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu00780A(seed) - calcu01082A(seed) + calcu00822A(seed) - calcu01198A(seed));
</script>

<template>
  <div class="blk">comp01094: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(205 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(25 50% 50%);
  display: inline-block;
}
</style>

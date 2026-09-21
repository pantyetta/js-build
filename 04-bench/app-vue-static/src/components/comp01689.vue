<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01079A, calcu00822A, calcu01204A } from '../lib/index.js';

const seed = 35;
const total = computed(() => calcu01079A(seed) - calcu00822A(seed) + calcu01204A(seed));
</script>

<template>
  <div class="blk">comp01689: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(130 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(310 50% 50%);
  display: inline-block;
}
</style>

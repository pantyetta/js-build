<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00561B, calcu00108B, calcu00463A, calcu01485B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu00561B(seed) - calcu00108B(seed) + calcu00463A(seed) - calcu01485B(seed));
</script>

<template>
  <div class="blk">comp01244: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(359 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(179 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00987B, calcu01124A, calcu00266A, calcu01529A } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu00987B(seed) - calcu01124A(seed) + calcu00266A(seed) - calcu01529A(seed));
</script>

<template>
  <div class="blk">comp00632: {{ total }}</div>
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

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01543A, calcu01296A, calcu01282B } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu01543A(seed) - calcu01296A(seed) + calcu01282B(seed));
</script>

<template>
  <div class="blk">comp00693: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(63 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(243 50% 50%);
  display: inline-block;
}
</style>

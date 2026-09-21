<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01321A, calcu01523A, calcu00089A, calcu00268B, calcu01332A } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu01321A(seed) - calcu01523A(seed) + calcu00089A(seed) - calcu00268B(seed) + calcu01332A(seed));
</script>

<template>
  <div class="blk">comp01484: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(220 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(40 50% 50%);
  display: inline-block;
}
</style>

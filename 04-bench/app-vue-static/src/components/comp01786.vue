<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01102B, calcu01321A, calcu01121A, calcu01003B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu01102B(seed) - calcu01321A(seed) + calcu01121A(seed) - calcu01003B(seed));
</script>

<template>
  <div class="blk">comp01786: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(299 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(119 50% 50%);
  display: inline-block;
}
</style>

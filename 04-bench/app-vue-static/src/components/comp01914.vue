<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01465A, calcu00064A, calcu00570A } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu01465A(seed) - calcu00064A(seed) + calcu00570A(seed));
</script>

<template>
  <div class="blk">comp01914: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(203 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(23 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00733A, calcu00156B, calcu01475A, calcu01167A } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00733A(seed) - calcu00156B(seed) + calcu01475A(seed) - calcu01167A(seed));
</script>

<template>
  <div class="blk">comp01032: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(191 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(11 50% 50%);
  display: inline-block;
}
</style>

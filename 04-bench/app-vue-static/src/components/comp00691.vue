<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01345A, calcu01538B, calcu00503A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu01345A(seed) - calcu01538B(seed) + calcu00503A(seed));
</script>

<template>
  <div class="blk">comp00691: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(78 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(258 50% 50%);
  display: inline-block;
}
</style>

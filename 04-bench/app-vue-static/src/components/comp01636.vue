<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01316A, calcu00995A, calcu01339A, calcu01123A } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu01316A(seed) - calcu00995A(seed) + calcu01339A(seed) - calcu01123A(seed));
</script>

<template>
  <div class="blk">comp01636: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(133 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(313 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01453A, calcu00679B, calcu01002A } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu01453A(seed) - calcu00679B(seed) + calcu01002A(seed));
</script>

<template>
  <div class="blk">comp01298: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(101 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(281 50% 50%);
  display: inline-block;
}
</style>

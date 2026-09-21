<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00971A, calcu00983B, calcu01568A, calcu00348A, calcu00864A } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu00971A(seed) - calcu00983B(seed) + calcu01568A(seed) - calcu00348A(seed) + calcu00864A(seed));
</script>

<template>
  <div class="blk">comp01393: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(290 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(110 50% 50%);
  display: inline-block;
}
</style>

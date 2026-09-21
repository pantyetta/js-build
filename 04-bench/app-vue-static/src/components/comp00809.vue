<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01502A, calcu01018A, calcu00775B, calcu00176A } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu01502A(seed) - calcu01018A(seed) + calcu00775B(seed) - calcu00176A(seed));
</script>

<template>
  <div class="blk">comp00809: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(200 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(20 50% 50%);
  display: inline-block;
}
</style>

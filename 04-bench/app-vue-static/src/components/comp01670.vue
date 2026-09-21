<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00116B, calcu00901A, calcu01566B, calcu01075A } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu00116B(seed) - calcu00901A(seed) + calcu01566B(seed) - calcu01075A(seed));
</script>

<template>
  <div class="blk">comp01670: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(159 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(339 50% 50%);
  display: inline-block;
}
</style>

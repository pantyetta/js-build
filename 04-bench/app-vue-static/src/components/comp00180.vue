<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00360A, calcu01263A, calcu01033A, calcu00428B, calcu00040A } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00360A(seed) - calcu01263A(seed) + calcu01033A(seed) - calcu00428B(seed) + calcu00040A(seed));
</script>

<template>
  <div class="blk">comp00180: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(305 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(125 50% 50%);
  display: inline-block;
}
</style>

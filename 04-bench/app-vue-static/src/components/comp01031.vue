<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01481A, calcu01564A, calcu00255A, calcu00765B, calcu01242A } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu01481A(seed) - calcu01564A(seed) + calcu00255A(seed) - calcu00765B(seed) + calcu01242A(seed));
</script>

<template>
  <div class="blk">comp01031: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(167 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(347 50% 50%);
  display: inline-block;
}
</style>

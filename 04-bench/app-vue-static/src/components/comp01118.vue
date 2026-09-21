<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00798B, calcu00572B, calcu01295A, calcu01456A } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu00798B(seed) - calcu00572B(seed) + calcu01295A(seed) - calcu01456A(seed));
</script>

<template>
  <div class="blk">comp01118: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(292 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(112 50% 50%);
  display: inline-block;
}
</style>

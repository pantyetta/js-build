<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00506B, calcu00891A, calcu01049A, calcu00518A, calcu00992A } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu00506B(seed) - calcu00891A(seed) + calcu01049A(seed) - calcu00518A(seed) + calcu00992A(seed));
</script>

<template>
  <div class="blk">comp00798: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(224 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(44 50% 50%);
  display: inline-block;
}
</style>

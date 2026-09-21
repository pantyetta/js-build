<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00286A, calcu01028B, calcu00831B, calcu01072A, calcu01367A } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu00286A(seed) - calcu01028B(seed) + calcu00831B(seed) - calcu01072A(seed) + calcu01367A(seed));
</script>

<template>
  <div class="blk">comp01961: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(64 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(244 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00940B, calcu00034A, calcu00334A, calcu00201A, calcu00065A } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu00940B(seed) - calcu00034A(seed) + calcu00334A(seed) - calcu00201A(seed) + calcu00065A(seed));
</script>

<template>
  <div class="blk">comp00462: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(255 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(75 50% 50%);
  display: inline-block;
}
</style>

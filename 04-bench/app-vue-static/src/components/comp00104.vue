<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01242B, calcu00895B, calcu00555B, calcu01303A, calcu00976A } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu01242B(seed) - calcu00895B(seed) + calcu00555B(seed) - calcu01303A(seed) + calcu00976A(seed));
</script>

<template>
  <div class="blk">comp00104: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(213 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(33 50% 50%);
  display: inline-block;
}
</style>

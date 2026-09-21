<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00164A, calcu00117A, calcu01395B, calcu00578A, calcu00337B } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu00164A(seed) - calcu00117A(seed) + calcu01395B(seed) - calcu00578A(seed) + calcu00337B(seed));
</script>

<template>
  <div class="blk">comp01996: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(2 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(182 50% 50%);
  display: inline-block;
}
</style>

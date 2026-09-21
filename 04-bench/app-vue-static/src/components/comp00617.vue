<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01070B, calcu00778A, calcu00390A, calcu00346A } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu01070B(seed) - calcu00778A(seed) + calcu00390A(seed) - calcu00346A(seed));
</script>

<template>
  <div class="blk">comp00617: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(36 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(216 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00613B, calcu00416A, calcu00448B, calcu00887A, calcu01108A } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00613B(seed) - calcu00416A(seed) + calcu00448B(seed) - calcu00887A(seed) + calcu01108A(seed));
</script>

<template>
  <div class="blk">comp00158: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(73 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(253 50% 50%);
  display: inline-block;
}
</style>

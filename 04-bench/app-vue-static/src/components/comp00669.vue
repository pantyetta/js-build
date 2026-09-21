<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01239A, calcu00671B, calcu01558B, calcu00523A } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu01239A(seed) - calcu00671B(seed) + calcu01558B(seed) - calcu00523A(seed));
</script>

<template>
  <div class="blk">comp00669: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(300 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(120 50% 50%);
  display: inline-block;
}
</style>

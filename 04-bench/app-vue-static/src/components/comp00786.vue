<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01132B, calcu00490A, calcu00576B } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu01132B(seed) - calcu00490A(seed) + calcu00576B(seed));
</script>

<template>
  <div class="blk">comp00786: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(218 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(38 50% 50%);
  display: inline-block;
}
</style>

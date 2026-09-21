<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00572A, calcu01314B, calcu01214B, calcu01379A, calcu00860B } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu00572A(seed) - calcu01314B(seed) + calcu01214B(seed) - calcu01379A(seed) + calcu00860B(seed));
</script>

<template>
  <div class="blk">comp01845: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(282 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(102 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00911A, calcu00301A, calcu01439A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00911A(seed) - calcu00301A(seed) + calcu01439A(seed));
</script>

<template>
  <div class="blk">comp00889: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(54 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(234 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00619A, calcu00356A, calcu00015B, calcu01279B } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu00619A(seed) - calcu00356A(seed) + calcu00015B(seed) - calcu01279B(seed));
</script>

<template>
  <div class="blk">comp01889: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(66 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(246 50% 50%);
  display: inline-block;
}
</style>

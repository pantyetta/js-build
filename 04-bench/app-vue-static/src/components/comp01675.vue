<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01412A, calcu00829A, calcu00789A } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu01412A(seed) - calcu00829A(seed) + calcu00789A(seed));
</script>

<template>
  <div class="blk">comp01675: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(226 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(46 50% 50%);
  display: inline-block;
}
</style>

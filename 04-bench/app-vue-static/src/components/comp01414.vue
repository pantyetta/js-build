<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01433A, calcu00470A, calcu00846A } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu01433A(seed) - calcu00470A(seed) + calcu00846A(seed));
</script>

<template>
  <div class="blk">comp01414: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(175 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(355 50% 50%);
  display: inline-block;
}
</style>

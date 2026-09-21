<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00093A, calcu00903A, calcu00683B, calcu00057A, calcu01274B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00093A(seed) - calcu00903A(seed) + calcu00683B(seed) - calcu00057A(seed) + calcu01274B(seed));
</script>

<template>
  <div class="blk">comp00148: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(207 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(27 50% 50%);
  display: inline-block;
}
</style>

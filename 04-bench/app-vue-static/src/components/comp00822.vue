<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01092A, calcu01094A, calcu00773A } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu01092A(seed) - calcu01094A(seed) + calcu00773A(seed));
</script>

<template>
  <div class="blk">comp00822: {{ total }}</div>
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

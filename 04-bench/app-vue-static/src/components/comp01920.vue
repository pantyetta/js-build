<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01229A, calcu00297A, calcu01280A, calcu00243A, calcu01202A } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu01229A(seed) - calcu00297A(seed) + calcu01280A(seed) - calcu00243A(seed) + calcu01202A(seed));
</script>

<template>
  <div class="blk">comp01920: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(142 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(322 50% 50%);
  display: inline-block;
}
</style>

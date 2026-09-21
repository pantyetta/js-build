<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00933A, calcu00362B, calcu01389A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00933A(seed) - calcu00362B(seed) + calcu01389A(seed));
</script>

<template>
  <div class="blk">comp00944: {{ total }}</div>
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

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00709B, calcu00000B, calcu01312A, calcu00001A } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu00709B(seed) - calcu00000B(seed) + calcu01312A(seed) - calcu00001A(seed));
</script>

<template>
  <div class="blk">comp01157: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(272 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(92 50% 50%);
  display: inline-block;
}
</style>

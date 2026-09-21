<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00600B, calcu01306A, calcu00176A, calcu00771A, calcu00814A } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu00600B(seed) - calcu01306A(seed) + calcu00176A(seed) - calcu00771A(seed) + calcu00814A(seed));
</script>

<template>
  <div class="blk">comp01145: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(242 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(62 50% 50%);
  display: inline-block;
}
</style>

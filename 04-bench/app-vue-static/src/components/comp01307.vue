<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00813B, calcu00700B, calcu00477B, calcu01456A } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00813B(seed) - calcu00700B(seed) + calcu00477B(seed) - calcu01456A(seed));
</script>

<template>
  <div class="blk">comp01307: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(109 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(289 50% 50%);
  display: inline-block;
}
</style>

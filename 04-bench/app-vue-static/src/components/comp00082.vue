<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01583B, calcu00211B, calcu01429B, calcu01358A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu01583B(seed) - calcu00211B(seed) + calcu01429B(seed) - calcu01358A(seed));
</script>

<template>
  <div class="blk">comp00082: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(78 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(258 50% 50%);
  display: inline-block;
}
</style>

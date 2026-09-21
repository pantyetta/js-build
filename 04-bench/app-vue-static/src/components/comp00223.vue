<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01112A, calcu00616A, calcu00647A, calcu01165B } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu01112A(seed) - calcu00616A(seed) + calcu00647A(seed) - calcu01165B(seed));
</script>

<template>
  <div class="blk">comp00223: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(293 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(113 50% 50%);
  display: inline-block;
}
</style>

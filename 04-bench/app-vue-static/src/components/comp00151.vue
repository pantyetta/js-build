<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00116A, calcu00194B, calcu01019A } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu00116A(seed) - calcu00194B(seed) + calcu01019A(seed));
</script>

<template>
  <div class="blk">comp00151: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(220 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(40 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01060A, calcu00589A, calcu00866A } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu01060A(seed) - calcu00589A(seed) + calcu00866A(seed));
</script>

<template>
  <div class="blk">comp01437: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(36 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(216 50% 50%);
  display: inline-block;
}
</style>

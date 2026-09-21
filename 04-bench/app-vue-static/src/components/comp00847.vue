<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00319A, calcu00700A, calcu01379A } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00319A(seed) - calcu00700A(seed) + calcu01379A(seed));
</script>

<template>
  <div class="blk">comp00847: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(187 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(7 50% 50%);
  display: inline-block;
}
</style>

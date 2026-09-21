<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01343A, calcu01015A, calcu01289A, calcu00589A, calcu01189B } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu01343A(seed) - calcu01015A(seed) + calcu01289A(seed) - calcu00589A(seed) + calcu01189B(seed));
</script>

<template>
  <div class="blk">comp01349: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(51 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(231 50% 50%);
  display: inline-block;
}
</style>

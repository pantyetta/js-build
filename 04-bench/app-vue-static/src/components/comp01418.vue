<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01238B, calcu01297B, calcu01362B } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu01238B(seed) - calcu01297B(seed) + calcu01362B(seed));
</script>

<template>
  <div class="blk">comp01418: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(312 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(132 50% 50%);
  display: inline-block;
}
</style>

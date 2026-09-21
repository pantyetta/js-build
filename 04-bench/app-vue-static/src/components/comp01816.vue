<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00528A, calcu01001B, calcu01157A, calcu00524A, calcu00547B } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu00528A(seed) - calcu01001B(seed) + calcu01157A(seed) - calcu00524A(seed) + calcu00547B(seed));
</script>

<template>
  <div class="blk">comp01816: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(224 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(44 50% 50%);
  display: inline-block;
}
</style>

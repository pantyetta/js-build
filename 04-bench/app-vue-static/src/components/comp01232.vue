<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01509B, calcu01452A, calcu01353B } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu01509B(seed) - calcu01452A(seed) + calcu01353B(seed));
</script>

<template>
  <div class="blk">comp01232: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(75 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(255 50% 50%);
  display: inline-block;
}
</style>

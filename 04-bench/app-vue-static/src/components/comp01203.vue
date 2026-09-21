<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01535B, calcu00741A, calcu00328A, calcu01118A } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu01535B(seed) - calcu00741A(seed) + calcu00328A(seed) - calcu01118A(seed));
</script>

<template>
  <div class="blk">comp01203: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(244 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(64 50% 50%);
  display: inline-block;
}
</style>

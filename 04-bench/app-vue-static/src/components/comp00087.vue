<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01153A, calcu00470A, calcu01574B } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu01153A(seed) - calcu00470A(seed) + calcu01574B(seed));
</script>

<template>
  <div class="blk">comp00087: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(225 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(45 50% 50%);
  display: inline-block;
}
</style>

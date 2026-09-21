<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00385B, calcu00733B, calcu01241A } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00385B(seed) - calcu00733B(seed) + calcu01241A(seed));
</script>

<template>
  <div class="blk">comp00982: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(265 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(85 50% 50%);
  display: inline-block;
}
</style>

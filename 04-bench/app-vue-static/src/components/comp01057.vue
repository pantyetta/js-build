<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01141A, calcu00807B, calcu01188A } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu01141A(seed) - calcu00807B(seed) + calcu01188A(seed));
</script>

<template>
  <div class="blk">comp01057: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(188 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(8 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01186A, calcu01147B, calcu00166B, calcu00740B } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu01186A(seed) - calcu01147B(seed) + calcu00166B(seed) - calcu00740B(seed));
</script>

<template>
  <div class="blk">comp00754: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(160 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(340 50% 50%);
  display: inline-block;
}
</style>

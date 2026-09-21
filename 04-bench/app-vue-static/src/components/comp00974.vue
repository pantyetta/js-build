<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01479B, calcu01458B, calcu01387B, calcu00835A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu01479B(seed) - calcu01458B(seed) + calcu01387B(seed) - calcu00835A(seed));
</script>

<template>
  <div class="blk">comp00974: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(210 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(30 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00978A, calcu00819B, calcu01080A } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu00978A(seed) - calcu00819B(seed) + calcu01080A(seed));
</script>

<template>
  <div class="blk">comp00782: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(330 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(150 50% 50%);
  display: inline-block;
}
</style>

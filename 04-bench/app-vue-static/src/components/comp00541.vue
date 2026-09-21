<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00820B, calcu00311B, calcu01344B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00820B(seed) - calcu00311B(seed) + calcu01344B(seed));
</script>

<template>
  <div class="blk">comp00541: {{ total }}</div>
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

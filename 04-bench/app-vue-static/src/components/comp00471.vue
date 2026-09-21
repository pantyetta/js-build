<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00820B, calcu00923B, calcu00332B } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu00820B(seed) - calcu00923B(seed) + calcu00332B(seed));
</script>

<template>
  <div class="blk">comp00471: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(256 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(76 50% 50%);
  display: inline-block;
}
</style>

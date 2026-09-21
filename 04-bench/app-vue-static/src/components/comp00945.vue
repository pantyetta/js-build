<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00897B, calcu01069B, calcu00931B } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00897B(seed) - calcu01069B(seed) + calcu00931B(seed));
</script>

<template>
  <div class="blk">comp00945: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(212 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(32 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00427A, calcu01095A, calcu01048B } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu00427A(seed) - calcu01095A(seed) + calcu01048B(seed));
</script>

<template>
  <div class="blk">comp00420: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(282 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(102 50% 50%);
  display: inline-block;
}
</style>

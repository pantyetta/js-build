<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00993A, calcu01416A, calcu00816B, calcu00105A } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu00993A(seed) - calcu01416A(seed) + calcu00816B(seed) - calcu00105A(seed));
</script>

<template>
  <div class="blk">comp01468: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(46 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(226 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00696B, calcu01445B, calcu01469B, calcu01236A, calcu00363B } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu00696B(seed) - calcu01445B(seed) + calcu01469B(seed) - calcu01236A(seed) + calcu00363B(seed));
</script>

<template>
  <div class="blk">comp00581: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(32 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(212 50% 50%);
  display: inline-block;
}
</style>

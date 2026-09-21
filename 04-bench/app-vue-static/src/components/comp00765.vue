<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01324A, calcu00796A, calcu00729A, calcu01465B, calcu01499B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu01324A(seed) - calcu00796A(seed) + calcu00729A(seed) - calcu01465B(seed) + calcu01499B(seed));
</script>

<template>
  <div class="blk">comp00765: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(108 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(288 50% 50%);
  display: inline-block;
}
</style>

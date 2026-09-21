<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00625A, calcu00656B, calcu01454B, calcu01125B } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu00625A(seed) - calcu00656B(seed) + calcu01454B(seed) - calcu01125B(seed));
</script>

<template>
  <div class="blk">comp01555: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(239 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(59 50% 50%);
  display: inline-block;
}
</style>

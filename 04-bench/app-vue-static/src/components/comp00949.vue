<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01070A, calcu00397B, calcu00298A, calcu00561B, calcu00112A } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu01070A(seed) - calcu00397B(seed) + calcu00298A(seed) - calcu00561B(seed) + calcu00112A(seed));
</script>

<template>
  <div class="blk">comp00949: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(24 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(204 50% 50%);
  display: inline-block;
}
</style>

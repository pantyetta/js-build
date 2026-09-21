<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01301A, calcu00019B, calcu00715A, calcu00723B } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu01301A(seed) - calcu00019B(seed) + calcu00715A(seed) - calcu00723B(seed));
</script>

<template>
  <div class="blk">comp00065: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(116 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(296 50% 50%);
  display: inline-block;
}
</style>

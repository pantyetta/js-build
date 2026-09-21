<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00521A, calcu01002B, calcu00986B, calcu01016B, calcu01401B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00521A(seed) - calcu01002B(seed) + calcu00986B(seed) - calcu01016B(seed) + calcu01401B(seed));
</script>

<template>
  <div class="blk">comp00710: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(236 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(56 50% 50%);
  display: inline-block;
}
</style>

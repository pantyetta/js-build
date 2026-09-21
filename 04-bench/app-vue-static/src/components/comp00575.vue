<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01551B, calcu00295B, calcu00298B, calcu00976A, calcu01386B } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu01551B(seed) - calcu00295B(seed) + calcu00298B(seed) - calcu00976A(seed) + calcu01386B(seed));
</script>

<template>
  <div class="blk">comp00575: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(357 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(177 50% 50%);
  display: inline-block;
}
</style>

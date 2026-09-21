<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00314B, calcu00333A, calcu01027A, calcu00060B, calcu00635B } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu00314B(seed) - calcu00333A(seed) + calcu01027A(seed) - calcu00060B(seed) + calcu00635B(seed));
</script>

<template>
  <div class="blk">comp00393: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(140 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(320 50% 50%);
  display: inline-block;
}
</style>

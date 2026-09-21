<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00529B, calcu01569A, calcu00417A, calcu01380B, calcu01071A } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu00529B(seed) - calcu01569A(seed) + calcu00417A(seed) - calcu01380B(seed) + calcu01071A(seed));
</script>

<template>
  <div class="blk">comp00313: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(197 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(17 50% 50%);
  display: inline-block;
}
</style>

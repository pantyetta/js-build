<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00974A, calcu01268B, calcu00320A, calcu00093A, calcu00656B } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu00974A(seed) - calcu01268B(seed) + calcu00320A(seed) - calcu00093A(seed) + calcu00656B(seed));
</script>

<template>
  <div class="blk">comp00651: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(148 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(328 50% 50%);
  display: inline-block;
}
</style>

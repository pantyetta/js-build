<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01275B, calcu00400B, calcu00929A } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu01275B(seed) - calcu00400B(seed) + calcu00929A(seed));
</script>

<template>
  <div class="blk">comp00191: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(243 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(63 50% 50%);
  display: inline-block;
}
</style>

<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01222B, calcu01411A, calcu00191B, calcu00744B, calcu00664B } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu01222B(seed) - calcu01411A(seed) + calcu00191B(seed) - calcu00744B(seed) + calcu00664B(seed));
</script>

<template>
  <div class="blk">comp00729: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(133 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(313 50% 50%);
  display: inline-block;
}
</style>

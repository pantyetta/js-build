<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01527B, calcu00424A, calcu00333A, calcu01095A, calcu00018A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu01527B(seed) - calcu00424A(seed) + calcu00333A(seed) - calcu01095A(seed) + calcu00018A(seed));
</script>

<template>
  <div class="blk">comp00702: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(143 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(323 50% 50%);
  display: inline-block;
}
</style>

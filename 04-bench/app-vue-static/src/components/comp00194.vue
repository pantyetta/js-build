<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00018A, calcu00286A, calcu00232A, calcu01305B, calcu00464B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu00018A(seed) - calcu00286A(seed) + calcu00232A(seed) - calcu01305B(seed) + calcu00464B(seed));
</script>

<template>
  <div class="blk">comp00194: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(208 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(28 50% 50%);
  display: inline-block;
}
</style>

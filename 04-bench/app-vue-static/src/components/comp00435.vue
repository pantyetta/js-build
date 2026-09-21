<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00672B, calcu00962A, calcu00094B, calcu00596A, calcu01500A } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu00672B(seed) - calcu00962A(seed) + calcu00094B(seed) - calcu00596A(seed) + calcu01500A(seed));
</script>

<template>
  <div class="blk">comp00435: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(200 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(20 50% 50%);
  display: inline-block;
}
</style>

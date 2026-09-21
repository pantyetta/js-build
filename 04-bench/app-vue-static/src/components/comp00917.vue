<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01330A, calcu01015A, calcu00482B } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu01330A(seed) - calcu01015A(seed) + calcu00482B(seed));
</script>

<template>
  <div class="blk">comp00917: {{ total }}</div>
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

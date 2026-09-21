<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01247A, calcu01424A, calcu00710B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu01247A(seed) - calcu01424A(seed) + calcu00710B(seed));
</script>

<template>
  <div class="blk">comp00326: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(162 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(342 50% 50%);
  display: inline-block;
}
</style>

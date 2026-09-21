<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00819B, calcu00891A, calcu01595A, calcu01127A, calcu00617B } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu00819B(seed) - calcu00891A(seed) + calcu01595A(seed) - calcu01127A(seed) + calcu00617B(seed));
</script>

<template>
  <div class="blk">comp00690: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(269 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(89 50% 50%);
  display: inline-block;
}
</style>

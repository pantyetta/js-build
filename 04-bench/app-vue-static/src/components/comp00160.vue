<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01274A, calcu01359A, calcu01101A, calcu01039B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu01274A(seed) - calcu01359A(seed) + calcu01101A(seed) - calcu01039B(seed));
</script>

<template>
  <div class="blk">comp00160: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(214 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(34 50% 50%);
  display: inline-block;
}
</style>

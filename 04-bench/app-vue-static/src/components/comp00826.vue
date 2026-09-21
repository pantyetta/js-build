<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01500A, calcu00364A, calcu01129B } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu01500A(seed) - calcu00364A(seed) + calcu01129B(seed));
</script>

<template>
  <div class="blk">comp00826: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(91 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(271 50% 50%);
  display: inline-block;
}
</style>

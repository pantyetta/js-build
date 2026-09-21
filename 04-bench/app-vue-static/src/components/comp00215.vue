<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00465B, calcu00212B, calcu00243A } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu00465B(seed) - calcu00212B(seed) + calcu00243A(seed));
</script>

<template>
  <div class="blk">comp00215: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(252 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(72 50% 50%);
  display: inline-block;
}
</style>

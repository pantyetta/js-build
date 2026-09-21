<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01574B, calcu00008B, calcu00751A } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu01574B(seed) - calcu00008B(seed) + calcu00751A(seed));
</script>

<template>
  <div class="blk">comp00351: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(207 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(27 50% 50%);
  display: inline-block;
}
</style>

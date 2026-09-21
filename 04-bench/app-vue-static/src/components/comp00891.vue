<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01580B, calcu00430B, calcu00432A, calcu00367A, calcu00152A } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu01580B(seed) - calcu00430B(seed) + calcu00432A(seed) - calcu00367A(seed) + calcu00152A(seed));
</script>

<template>
  <div class="blk">comp00891: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(231 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(51 50% 50%);
  display: inline-block;
}
</style>

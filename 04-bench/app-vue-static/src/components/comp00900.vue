<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00859B, calcu01040B, calcu01043B, calcu01429A, calcu00133A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00859B(seed) - calcu01040B(seed) + calcu01043B(seed) - calcu01429A(seed) + calcu00133A(seed));
</script>

<template>
  <div class="blk">comp00900: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(280 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(100 50% 50%);
  display: inline-block;
}
</style>

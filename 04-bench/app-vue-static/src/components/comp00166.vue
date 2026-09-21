<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01435B, calcu00572B, calcu00943B, calcu00373B, calcu00075A } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu01435B(seed) - calcu00572B(seed) + calcu00943B(seed) - calcu00373B(seed) + calcu00075A(seed));
</script>

<template>
  <div class="blk">comp00166: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(247 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(67 50% 50%);
  display: inline-block;
}
</style>

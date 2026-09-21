<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01330A, calcu01568B, calcu01575A } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu01330A(seed) - calcu01568B(seed) + calcu01575A(seed));
</script>

<template>
  <div class="blk">comp00447: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(146 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(326 50% 50%);
  display: inline-block;
}
</style>

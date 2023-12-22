<template>
 <tr>
  <td class="w-8">drag</td>
  <td class="w-8">
   <input
    v-model="selected"
    type="checkbox"
    :name="`selected-${Math.random()}`"
    :id="`selected-${Math.random()}`"
   />
  </td>
  <td v-for="(column, index) in columns" :key="index" v-on-click-outside="closeInput">
   <input v-if="input" type="text" />
   <span @click="input = !input" v-else>{{ props.item[column.value] }}</span>
  </td>
 </tr>
</template>

<script>
export default {
 name: 'TextRow'
}
</script>

<script setup>
import { vOnClickOutside } from '@vueuse/components'
import { ref } from 'vue'

const input = ref(false)
const selected = ref(false)

const closeInput = () => {
 input.value = false
}

const props = defineProps({
 item: Object,
 columns: Array
})
defineExpose({
 selected
})
</script>

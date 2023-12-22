<template>
 <table>
  <thead>
   <tr>
    <th class="w-8" v-if="props.selectable">
     <input @change="onSelectAll" type="checkbox" />
    </th>
    <th v-for="(th, index) in dreamColumns" :key="index">{{ th.name }}</th>
   </tr>
  </thead>
  <tbody>
   <tr
    :draggable="draggable"
    :class="{
     'bg-gray-200': columnValue.selected
    }"
    v-for="(columnValue, index) in dreamItems"
    :key="index"
    @dragstart="onDragStart(index)"
    @dragend="onDragEnd()"
    @dragover="onDragOver(index)"
   >
    <td class="w-8" v-if="props.selectable">
     <input
      @change="onRowSelected(index)"
      name="selecteds"
      v-model="value"
      type="checkbox"
      :value="columnValue"
     />
    </td>
    <td v-for="(col, index) in props.columns" :key="index">{{ columnValue[col.value] }}</td>
   </tr>
  </tbody>
 </table>
</template>

<script setup>
import { computed, ref } from 'vue'
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
 columns: Array,
 items: Array,
 selectable: Boolean,
 draggable: Boolean,
 modelValue: Array
})

const dragStartElement = ref(null)
const targetElement = ref(null)

const value = computed({
 get() {
  return props.modelValue
 },
 set(value) {
  emit('update:modelValue', value)
 }
})

const dreamItems = ref(
 props.items.map((column) => {
  return {
   ...column,
   selected: false
  }
 })
)

const onDragStart = (index) => {
 dragStartElement.value = index
}

const onDragOver = (index) => {
 targetElement.value = index
}

const onDragEnd = () => {
 if (dragStartElement.value !== null) {
  const draggedElement = dreamItems.value.splice(dragStartElement.value, 1)[0]
  dreamItems.value.splice(targetElement.value, 0, draggedElement)
 }
 dragStartElement.value = null
}

const dreamColumns = computed(() => {
 return props.columns.map((column) => {
  return {
   ...column
  }
 })
})

const onRowSelected = (index) => {
 dreamItems.value[index].selected = !dreamItems.value[index].selected
}

const onSelectAll = (event) => {
 const checked = event.target.checked

 dreamItems.value.forEach((columnValue) => {
  columnValue.selected = checked
 })

 emit('update:modelValue', checked ? dreamItems.value : [])
}
</script>

<template>
  <div class="p-2">
    <Voucher :voucher="dataSource" />
    <!-- <BasicTable
      @register="registerTable"
      :bordered="border"
      @edit-end="handleEditEnd"
      @edit-cancel="handleEditCancel"
      :beforeEditSubmit="beforeEditSubmit"
    /> -->
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getMultipleHeaderColumns } from './tableData';
  import Voucher from '/@/views/voucher/index.vue';

  const dataList = [
    {
      id: 1,
      desc: '工资',
      name: '暂无',
      p1: 1,
      p2: 2,
      p3: 3,
      p4: 5,
      p5: 9,
      p6: 7,
      p7: 0,
      p8: 1,
    },
    { id: 2, desc: '报销', name: '暂无', b1: 1, b2: 2, b3: 3, b4: 5, b5: 9, b6: 7, b7: 0, b8: 1 },
    { id: 3, desc: '工资', name: '暂无', p1: 1, p2: 2, p3: 3, p4: 5, p5: 9, p6: 7, p7: 0, p8: 1 },
  ];

  export default defineComponent({
    components: { BasicTable, Voucher },
    setup() {
      const [registerTable] = useTable({
        dataSource: dataList,
        columns: getMultipleHeaderColumns(),
        bordered: true,
        summaryFunc: handleSummary,
      });
      const dataSource = {
        numberId: 100010,
        total: 2239281123,
        items: [
          {
            id: 10,
            summart: '工资',
            subject: '科目一',
            debite: 2239281123,
            credit: 846545,
          },
          { id: 10, summart: '工资', subject: '科目二', debite: 2051.23, credit: 5856456 },
          { id: 10, summart: '工资', subject: '科目三', debite: 12659181, credit: 2312.31 },
        ],
        bookkeeper: 'HarleyQ',
      };
      function handleSummary(tableData: Recordable[]) {
        const totalNo = tableData.reduce((prev, next) => {
          prev += next.no;
          return prev;
        }, 0);
        return [
          {
            _row: '合计',
            _index: '平均值',
            no: totalNo,
          },
        ];
      }
      function handleEditEnd({ record, index, key, value }: Recordable) {
        console.log(record, index, key, value);
        return false;
      }
      async function beforeEditSubmit({ record, index, key, value }) {
        console.log('单元格数据正在准备提交', { record, index, key, value });
        // return await feakSave({ id: record.id, key, value });
      }

      function handleEditCancel() {
        console.log('cancel');
      }
      return {
        registerTable,
        handleEditEnd,
        handleEditCancel,
        beforeEditSubmit,
        handleSummary,
        dataSource,
      };
    },
  });
</script>
<style scoped>
  :deep(.ant-table-fixed-header .ant-table-scroll .ant-table-header) {
    margin-bottom: -20px;
    padding-bottom: 20px;
    overflow: scroll;
    /* border: 1px solid; */
    background-color: pink;
  }
</style>

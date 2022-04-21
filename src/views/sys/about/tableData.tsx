import { FormProps, FormSchema } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';

export function getMultipleHeaderColumns(): BasicColumn[] {
  return [
    {
      title: '行次',
      dataIndex: 'id',
      edit: true,
      // editable:true,
      width: 100,
    },
    {
      title: '摘要',
      dataIndex: 'desc',
      edit: true,

      width: 150,
    },
    {
      title: '会计科目',
      dataIndex: 'name',
      edit: true,

      width: 200,
    },
    {
      title: '借方金额',
      dataIndex: 'bPrice',
      // edit:true,
      // sorter: true,
      children: [
        {
          title: '百',
          dataIndex: 'p13',
          width: 30,
        },
        {
          title: '十',
          dataIndex: 'p12',
          width: 30,
        },
        {
          title: '亿',
          dataIndex: 'p11',
          width: 30,
        },
        {
          title: '千',
          dataIndex: 'p10',
          width: 30,
        },
        {
          title: '百',
          dataIndex: 'p9',
          width: 30,
        },
        {
          title: '十',
          dataIndex: 'p8',
          width: 30,
        },
        {
          title: '万',
          dataIndex: 'p7',
          width: 30,
        },
        {
          title: '千',
          dataIndex: 'p6',
          width: 30,
        },
        {
          title: '百',
          dataIndex: 'p5',
          width: 30,
        },
        {
          title: '十',
          dataIndex: 'p4',
          width: 30,
        },
        {
          title: '元',
          dataIndex: 'p3',
          width: 30,
        },
        {
          title: '角',
          dataIndex: 'p2',
          width: 30,
        },
        {
          title: '分',
          dataIndex: 'p1',
          width: 30,
        },
      ],
    },
    {
      title: '贷方金额',
      dataIndex: 'gPrice',
      // sorter: true,
      children: [
        {
          title: '百',
          dataIndex: 'b13',
          width: 30,
        },
        {
          title: '十',
          dataIndex: 'b12',
          width: 30,
        },
        {
          title: '亿',
          dataIndex: 'b11',
          width: 30,
        },
        {
          title: '千',
          dataIndex: 'b10',
          width: 30,
        },
        {
          title: '百',
          dataIndex: 'b9',
          width: 30,
        },
        {
          title: '十',
          dataIndex: 'b8',
          width: 30,
        },
        {
          title: '万',
          dataIndex: 'b7',
          width: 30,
        },
        {
          title: '千',
          dataIndex: 'b6',
          width: 30,
        },
        {
          title: '百',
          dataIndex: 'b5',
          width: 30,
        },
        {
          title: '十',
          dataIndex: 'b4',
          width: 30,
        },
        {
          title: '元',
          dataIndex: 'b3',
          width: 30,
        },
        {
          title: '角',
          dataIndex: 'b2',
          width: 30,
        },
        {
          title: '分',
          dataIndex: 'b1',
          width: 30,
        },
      ],
    },
  ];
}

// export function getCustomHeaderColumns(): BasicColumn[] {
//   return [
//     {
//       title: 'ID',
//       dataIndex: 'id',
//       width: 200,
//     },
//     {
//       // title: '姓名',
//       dataIndex: 'name',
//       width: 120,
//       // slots: { title: 'customTitle' },
//     },
//     {
//       // title: '地址',
//       dataIndex: 'address',
//       width: 120,
//       // slots: { title: 'customAddress' },
//       sorter: true,
//     },

//     {
//       title: '编号',
//       dataIndex: 'no',
//       width: 120,
//       filters: [
//         { text: 'Male', value: 'male', children: [] },
//         { text: 'Female', value: 'female', children: [] },
//       ],
//     },
//     {
//       title: '开始时间',
//       dataIndex: 'beginTime',
//       width: 120,
//     },
//     {
//       title: '结束时间',
//       dataIndex: 'endTime',
//       width: 120,
//     },
//   ];
// }
// const renderContent = ({ text, index }: { text: any; index: number }) => {
//   const obj: any = {
//     children: text,
//     attrs: {},
//   };
//   if (index === 9) {
//     obj.attrs.colSpan = 0;
//   }
//   return obj;
// };
// export function getMergeHeaderColumns(): BasicColumn[] {
//   return [
//     {
//       title: 'ID',
//       dataIndex: 'id',
//       width: 300,
//       customRender: renderContent,
//     },
//     {
//       title: '姓名',
//       dataIndex: 'name',
//       width: 300,
//       customRender: renderContent,
//     },
//     {
//       title: '地址',
//       dataIndex: 'address',
//       colSpan: 2,
//       width: 120,
//       sorter: true,
//       customRender: ({ text, index }: { text: any; index: number }) => {
//         const obj: any = {
//           children: text,
//           attrs: {},
//         };
//         if (index === 2) {
//           obj.attrs.rowSpan = 2;
//         }
//         if (index === 3) {
//           obj.attrs.colSpan = 0;
//         }
//         return obj;
//       },
//     },
//     {
//       title: '编号',
//       dataIndex: 'no',
//       colSpan: 0,
//       filters: [
//         { text: 'Male', value: 'male', children: [] },
//         { text: 'Female', value: 'female', children: [] },
//       ],
//       customRender: renderContent,
//     },
//     {
//       title: '开始时间',
//       dataIndex: 'beginTime',
//       width: 200,
//       customRender: renderContent,
//     },
//     {
//       title: '结束时间',
//       dataIndex: 'endTime',
//       width: 200,
//       customRender: renderContent,
//     },
//   ];
// }
// export const getAdvanceSchema = (itemNumber = 6): FormSchema[] => {
//   const arr: any = [];
//   for (let index = 0; index < itemNumber; index++) {
//     arr.push({
//       field: `field${index}`,
//       label: `字段${index}`,
//       component: 'Input',
//       colProps: {
//         xl: 12,
//         xxl: 8,
//       },
//     });
//   }
//   return arr;
// };
// export function getFormConfig(): Partial<FormProps> {
//   return {
//     labelWidth: 100,
//     schemas: [
//       ...getAdvanceSchema(5),
//       {
//         field: `field11`,
//         label: `Slot示例`,
//         component: 'Select',
//         slot: 'custom',
//         colProps: {
//           xl: 12,
//           xxl: 8,
//         },
//       },
//     ],
//   };
// }
// export function getBasicData() {
//   const data: any = (() => {
//     const arr: any = [];
//     for (let index = 0; index < 40; index++) {
//       arr.push({
//         id: `${index}`,
//         name: 'John Brown',
//         age: `1${index}`,
//         no: `${index + 10}`,
//         address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
//         beginTime: new Date().toLocaleString(),
//         endTime: new Date().toLocaleString(),
//       });
//     }
//     return arr;
//   })();
//   return data;
// }

// export function getTreeTableData() {
//   const data: any = (() => {
//     const arr: any = [];
//     for (let index = 0; index < 40; index++) {
//       arr.push({
//         id: `${index}`,
//         name: 'John Brown',
//         age: `1${index}`,
//         no: `${index + 10}`,
//         address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
//         beginTime: new Date().toLocaleString(),
//         endTime: new Date().toLocaleString(),
//         children: [
//           {
//             id: `l2-${index}`,
//             name: 'John Brown',
//             age: `1${index}`,
//             no: `${index + 10}`,
//             address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
//             beginTime: new Date().toLocaleString(),
//             endTime: new Date().toLocaleString(),
//           },
//         ],
//       });
//     }
//     return arr;
//   })();

//   return data;
// }

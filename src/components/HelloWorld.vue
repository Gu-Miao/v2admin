<template>
  <a-table :columns="columns" :data-source="data" bordered> </a-table>
</template>
<script>
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  },
]

export default {
  data() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
      },
      {
        title: 'Home phone',
        colSpan: 2,
        dataIndex: 'tel',
      },
      {
        title: 'Phone',
        colSpan: 0,
        dataIndex: 'phone',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        customRender: (value, row, index) => {
          console.log(value, row, index)
          const obj = {
            children: value,
            attrs: { rowSpan: 0 },
          }
          if (index === 0) {
            obj.attrs.rowSpan = data.length
            obj.children = (
              <div>
                <textarea placeholder="fuck you"></textarea>
              </div>
            )
          }

          return obj
        },
      },
    ]
    return {
      data,
      columns,
    }
  },
}
</script>

const large = [];
for (let i = 0; i < 100; i++) {
  large.push({ value: 'Item ' + i });
}

const exampleData = {
  groups: [
    {
      label: 'Group One',
      children: [
        { value: '1-One' },
        { value: '1-Two' },
        { value: '1-Three' },
        { value: '1-Four', label: 'Four Label' }
      ]
    },
    {
      label: 'Group Two',
      children: [
        { value: '2-One' },
        { value: '2-Two' },
        { value: '2-Three' },
        { value: '2-Four', label: 'Four Label' }
      ]
    },
    {
      label: 'Group Three',
      children: [
        { value: '3-One' },
        { value: '3-Two' },
        { value: '3-Three' },
        { value: '3-Four', label: 'Four Label' }
      ]
    }
  ],
  large: large,
  list: [
    { value: 'One', selected: true },
    { value: 'Two' },
    { value: 'Three' },
    { value: 'Four', label: 'Four Label' }
  ]
};

export default exampleData;

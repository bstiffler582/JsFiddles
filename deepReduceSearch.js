const arr = [
    {
      value: 'Miss1',
      children: [
        { value: 'Miss2' },
        { value: 'Hit1', children: [ { value: 'Miss3' } ] }
      ]
    },
    {
      value: 'Miss4',
      children: [
        { value: 'Miss5' },
        { value: 'Miss6', children: [ { value: 'Hit2' } ] }
      ]
    },
    {
      value: 'Miss7',
      children: [
        { value: 'Miss8' },
        { value: 'Miss9', children: [ { value: 'Miss10' } ] }
      ]
    },
    {
      value: 'Hit3',
      children: [
        { value: 'Miss11' },
        { value: 'Miss12', children: [ { value: 'Miss13' } ] }
      ]
    },
    {
      value: 'Miss14',
      children: [
        { value: 'Hit4' },
        { value: 'Miss15', children: [ { value: 'Miss16' } ] }
      ]
    },
  ];
  
  function deepFilter(input, predicate) {
     return input.reduce(function fr(acc, curr) {  
      if (curr.children) {
        const children = curr.children.reduce(fr, []);
        if (children.length) {
            return acc.concat({ ...curr, children: children });
        }
      }
      if (predicate(curr.value)) {
          return acc.concat(curr);
      } else {
          return acc;
      }
    }, []);
  }
  
  let pred = (obj) => {
      return obj.includes('Hit4');
  }
  
  const filtered = deepFilter(arr, pred);
  console.log(filtered);  
const unival = {
  value: 5,
  children: [{
    value: 5,
    children: [{
      value: 5,
      children: []
    }, {
      value: 5,
      children: []
    }]
  }, {
    value: 5,
    children: [{
      value: 5,
      children: []
    }, {
      value: 4,
      children: []
    }]
  }]
}

const isUnival = (tree) => {
  const { value, children } = tree
  if (children.length === 0) {
    return true
  }
  return children.every(child => child.value === value) && children.every(isUnival)
}

const countUnivalNodes = (tree) => {
  if (isUnival(tree)) {
    return 1
  }
  return tree.children.reduce((acc, child) => acc + countUnivalNodes(child), 0)
}

console.log('isUnival', isUnival(unival))

console.log('countUnivalNodes', countUnivalNodes(unival))
